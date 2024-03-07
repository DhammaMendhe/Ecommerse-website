import React,{ useContext } from 'react'
import {ShopContext} from  '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';





export default function Product() {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const Product = all_product.find((e)=>e.id === Number(productId));

  return (
    <div>
      <Breadcrums/>
    </div>
  )
}
