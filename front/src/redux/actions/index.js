import axios from "axios"
export const GET_PRODUCTS = "GET_PRODUCTS";


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