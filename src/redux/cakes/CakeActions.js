import { BuyCakes } from "./CakeType";
import { AddMoreCakes } from "./CakeType";

export const buyCake = ()=>{
    return{
        type: BuyCakes
    }
}

export const addMoreCake =()=>{
    return {
        type: AddMoreCakes
    }
}
