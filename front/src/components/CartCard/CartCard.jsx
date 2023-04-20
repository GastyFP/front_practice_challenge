import "./styles.css"

const CartCard = ({id,name,image,price,quantity,countInStock,removeFromCart}) => {
  return (
    <div className="cc-container">
        <img className="cc-image" src={`http://localhost:5050${image}`} alt={name} />
        <h2 className="cc-name">{name}</h2>
        <span className="cc-price" >${price}</span>
        <input className="cc-quantity-input" type="number" value={quantity} min={1} max={countInStock} />
        <button className="cc-remove-btn" onClick={removeFromCart} >X</button>
    </div>
  )
}

export default CartCard