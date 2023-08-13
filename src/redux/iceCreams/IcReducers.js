import { AddMoreIceCreams, BuyIceCreams } from "./IcTypes";


const initialState = {
    numOfIceCreams : 20
}


const IceCreamReducer = (state = initialState, action)=>{
    switch (action.type) {
        case BuyIceCreams: return{
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }

        case AddMoreIceCreams : return {
            ...state,
            numOfIceCreams : state.numOfIceCreams >= 27 ? 'No more cakes are ready': state.numOfIceCreams + 1
        }
    
        default: return state
            
    }
}

export default IceCreamReducer;