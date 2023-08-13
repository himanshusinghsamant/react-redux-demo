import { PRODUCTS_DATA } from "./ProductType";

const initialState ={
    products: []
}

const productsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case PRODUCTS_DATA : 
        return {
            ...state,
            products : action.payload
        }

        default:
            return state;
    }
}


export default productsReducer;