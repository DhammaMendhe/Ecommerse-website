import React from 'react'
import './NewCollections.css'
import Item from '../item/Item'
import new_collection from '../Assets folder/Assets/new_collections'
export default function NewCollections() {
  return (
    <div  className='NewCollections'>

        <h1>New Collections</h1>
         <hr />

        <div className="collections">
         {new_collection.map((item,i)=>{
            return  <Item
            key={i}
            id={item.id}
            name={item.name}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
         })}
        
        </div>
    </div>
  )
}
