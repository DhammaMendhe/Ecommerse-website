import React from 'react'
import './breadcrums.css'
import arrow_icon from '../Assets folder/Assets/breadcrum_arrow.png'


export default function Breadcrums(props) {
    const {Product} = props;
  return (
    <div className='Breadcrums'>
Home <img src={arrow_icon} alt="" /> SHOP<img src={arrow_icon} alt="" />{Product.category}<img src={arrow_icon} alt="" />{Product.name}
    </div>
  )
}
