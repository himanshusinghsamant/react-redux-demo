import { combineReducers } from "redux";
import CakeReducer from "./cakes/CakeReducer";
import IceCreamReducer from "./iceCreams/IcReducers";
import productsReducer from './products/ProductReducer'


const rootReducer = combineReducers({
    Cake : CakeReducer,
    IceCream : IceCreamReducer,
    Products : productsReducer,
})

export default rootReducer;