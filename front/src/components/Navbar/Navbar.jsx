import "./styles.css"
import {Link} from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-container">
        <Link className="home" to={"/"}><span>E-COMMERCE</span></Link>
        <Link className="cart-link" to={"/cart"} > Go to CART</Link>
    </div>

  )
}

export default Navbar