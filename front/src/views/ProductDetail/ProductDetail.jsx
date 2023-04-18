import "./styles.css"

const ProductDetail = ({image,name,description,brand,category,price,countInStock})=>{
    
    return(
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <span>{price}</span>
            <p>{description}</p>
        </div>
    )

}

export default ProductDetail