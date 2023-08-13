import { AddMoreIceCreams, BuyIceCreams } from "./IcTypes";

export const buyIcecreams =()=>{
    return{
        type: BuyIceCreams
    }
}

export const addMoreIcecreams =()=>{
    return {
        type: AddMoreIceCreams
    }
}