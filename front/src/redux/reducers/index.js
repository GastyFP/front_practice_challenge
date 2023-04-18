import { GET_PRODUCTS,ADD_TO_CART } from "../actions"

const initialState = {
    products: [],
    cart:[]
}
const reducer = (state = initialState , action) =>{
        switch(action.type){
            case GET_PRODUCTS:
                return{
                    ...state,
                    products: action.payload
                }
            case ADD_TO_CART:
                if(!action.payload.quantity) action.payload.quantity = 1;
                const found = state.cart.find(item=>item._id === action.payload._id)
                if(found){
                    found.quantity += 1;
                    return state        
                }else{
                    return{
                        ...state,
                        cart: [...state.cart , action.payload]
                    }
                }

            default: return state
        }
}
export default reducer