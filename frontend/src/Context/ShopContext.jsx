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

  const [count, setcount] = useState(0);
  // const handleCartClickPlus = (itemid) => {
  // console.log(itemid);
  // setcount((count) => {
  //   console.log(cart[itemid])
  //   if (cart[itemid]<= 2) {
  //    return ;
  //   }
  //   // return count + 1;
  // });
  // };
  // console.log(cartItems);

  const addToCart = (ItemId) => {
    console.log(ItemId);

    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    localStorage.setItem("cartstore", cartItems);
    setcount(() => {
      if (cartItems[ItemId] < 1) {
        console.log("what is this3", cartItems[ItemId]);
        return count + 1;
      } else {
        return count;
      }

      // console.log("this is into cart", cartItems[14]);
      // const currentCount = (cartItems).find((cart)=>console.log(cart)   );
      // Initialize count to 0 if undefined
      // console.log("ithoiii",currentCount)
      // console.log("this is setcount",typeof(cart))
    });
  };

  const removeFromeCart = (ItemId) => {
    console.log(ItemId);
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
    if (count > 0) {
      setcount(count - 1);
    }
  };
  const getTotalcartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
      return totalAmount;
    }
  };

  const contextValue = {
    getTotalcartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromeCart,
    // handleCartClickPlus,
    count,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children};
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
