import React from 'react'
import {Link} from "react-router-dom"
import "./styles.css"

// paso las actions como props para todos los items

export default function ProductCard({id,image,name,price,stock,addToCart}) {
  
  return (
    <div className='card-container'>
    <Link to={`/products/${id}`}><img className='product-img' src={`http://localhost:5050${image}`} alt={name} /></Link>
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

