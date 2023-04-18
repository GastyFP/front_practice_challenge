import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import "./styles.css"
import { getDetail } from "../../redux/actions"

const ProductDetail = ()=>{
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDetail(params.id))
    })
    
    const {name,image,price,description,category,countInStock,rating,numReviews} = useSelector(state=>state.productDetail)
    return(
        <div className="detailContainer">
            <img  src={`http://localhost:5050${image}`} alt={name} />
            <h2>{name}</h2>
                <span className="price">$ {price}</span>
            <p className="description">{description}</p>
            <div className="rating-container">
                <span >Rating : {rating} ({numReviews} Reviews) </span>
                <span style={{fontFamily: "italic",paddingRight:"10px"}}>{category}</span>
            </div>
        </div>
    )

}

export default ProductDetail