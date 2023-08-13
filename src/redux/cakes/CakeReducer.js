import {BuyCakes} from "./CakeType";
import { AddMoreCakes } from "./CakeType";

const initialState = {
    numOfCakes : 10,
}


const CakeReducer = (state = initialState, action)=>{
    switch (action.type) {
        case BuyCakes : return{
            ...state,
            numOfCakes : state.numOfCakes -1
        }
        case AddMoreCakes:return{
            ...state,
            numOfCakes: state.numOfCakes +1
        }
    
        default: return state
    }
}

export default CakeReducer;
