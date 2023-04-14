import React from 'react'
import "./styles.css"

// paso las actions como props para todos los items

export default function ProductCard({image,name,price,stock,addToCart}) {
  return (
    <div className='card-container'>
    <img className='product-img' src={`http://localhost:5050${image}`} alt={name} />
    <h3 className='product-name'>{name}</h3>
    {stock>0?
    <span className='product-price'>$ {price}</span>
    :
    <span className='no-stock'>Out of Stock</span>
    }
    <button onClick={addToCart} className="stock" style={stock<=0 ? {backgroundColor:"gray"}:null} disabled={!stock>0}>Add to Cart!</button>
    </div>
  )
}

