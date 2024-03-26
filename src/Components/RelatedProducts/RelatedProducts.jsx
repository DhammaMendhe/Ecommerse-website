import React from 'react'
import './relatedproducts.css'
import data_products from '../Assets folder/Assets/data'
import Item from '../item/Item'
export default function RelatedProducts() {
  return (
    <div className='relatedproducts'>
        <h1>Related Product</h1>
         <hr />
         <div className="relatedproducts-item">
            {data_products.map((item,i)=>{
                return <Item 
                key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}/>
            })
                
            }
         </div>
    </div>
  )
}
