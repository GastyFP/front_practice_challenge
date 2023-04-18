import React from "react";
import { useEffect } from "react";
import {useDispatch , useSelector} from "react-redux"
import ProductCard from "../../components/ProductCard/ProductCard";
import {addToCart, getProducts} from "../../redux/actions/index"
import "./styles.css"


const ProductList = () =>{

    const dispatch = useDispatch()
    const products = useSelector(state=>state.products)
    // const cart = useSelector(state=>state.cart)

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])   

    const handleAddToCart = (id)=>{
        dispatch(addToCart(id))
    }
    // console.log(cart)
    
    return(
        <div>
            { products ? 
                products.map(prod=>(
                    <ProductCard key={prod.name} id={prod._id} name={prod.name} image={prod.image} price={prod.price} stock={prod.countInStock} addToCart={()=>handleAddToCart(prod._id)} />
                )) : <span>LOADING...</span>
            }
        </div>
    )
}
export default ProductList