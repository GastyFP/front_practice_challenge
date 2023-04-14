import React from "react";
import { useEffect } from "react";
import {useDispatch , useSelector} from "react-redux"
import ProductCard from "../../components/ProductCard/ProductCard";
import {getProducts} from "../../redux/actions/index"
import "./styles.css"


const ProductList = () =>{

    const dispatch = useDispatch()
    const products = useSelector(state=>state.products)

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const handleAddToCart = ()=>{
        
    }

    return(
        <div>
            { products ? 
                products.map(prod=>(
                    <ProductCard key={prod.name} id={prod.id} name={prod.name} image={prod.image} price={prod.price} stock={prod.countInStock} addToCart={()=>handleAddToCart} />
                )) : <span>LOADING...</span>
            }
        </div>
    )
}
export default ProductList