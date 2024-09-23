import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets folder/Assets/dropdown_icon.png";
import Item from "../Components/item/Item";
import './css/shopcatagory.css'
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shopcatagory">
      <img className="shopcatagory-banner" src={props.banner} alt="no imge" />
      <div className="shopcatagory-index-sort">
        <p>
          <span> showing 1-12 products   </span>out of 36
        </p>
        <div className="shopcatagory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatagory-products">
        {all_product.map((item, i) => {
          if(props.category === item.category){
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                img={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else{
            return null;
          }
       
        })}
      </div>
      <div className="shopcatagory-loadmore">
        explore more</div>
    </div>
  );
};

export default ShopCategory;
