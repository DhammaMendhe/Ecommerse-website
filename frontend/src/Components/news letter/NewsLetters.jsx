import React from 'react'
import './newsletter.css'
export default function NewsLetters() {
  return (
    <div className='newsletter'>
        <h1>Get Exlusive offer on your email</h1>
        <p>subscribe to our newsletter and stay updated</p>
        <div className='lower_input'> 
            <input  className='newsletter-input' type="email" placeholder='your email id ' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
