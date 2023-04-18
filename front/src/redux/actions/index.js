import axios from "axios"
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";


export const getProducts = ()=>{
    return async (dispatch)=>{
        try {
            const response = await axios("http://localhost:5050/api/products")
            return dispatch({
                type: GET_PRODUCTS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }   
    }
}

export const addToCart =(id)=>{
    return async (dispatch) =>{
            const response = await axios.get(`http://localhost:5050/api/products/${id}`)
        return dispatch({
            type: ADD_TO_CART,
            payload: response.data
        })
    }
}