import { createContext, useState } from "react";
import all_product from "../Components/Assets folder/Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}; 

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  console.log(cartItems);

  const addToCart = (ItemId) => {
    console.log(ItemId)

    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    console.log(cartItems)
  };

  const removeFromeCart = (ItemId) => {
    console.log(ItemId)
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };
  const getTotalcartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
      return totalAmount;  
    } 
  };
  const [count,setcount] = useState(0);

const handlecount = ()=>{
setcount(count+1);
}
  const contextValue = { getTotalcartAmount,all_product, cartItems, addToCart, removeFromeCart,handlecount };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children};
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
