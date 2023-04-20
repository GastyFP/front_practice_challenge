import { useEffect } from "react"
import "./styles.css"
import {useSelector , useDispatch} from "react-redux"
import CartCard from "../../components/CartCard/CartCard"
import { removeFromCart } from "../../redux/actions"


function CartDetail() {
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    const handleRemoveFromCart = (id)=>{
        dispatch(removeFromCart(id))
    }

  return (
    <div>
      {cart.length !== 0 ? cart.map(item=>(
        <CartCard key={item._id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} countInStock={item.countInStock} image={item.image} removeFromCart={()=>handleRemoveFromCart(item._id)}  />
      )): <span> OOPS , THERE'S NOTHING HERE YET</span>
      }
    </div>
  )
}

export default CartDetail