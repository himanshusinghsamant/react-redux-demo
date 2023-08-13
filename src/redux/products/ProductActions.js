import { PRODUCTS_DATA } from "./ProductType";

export const productsData = (products)=>{
    return { 
        type : PRODUCTS_DATA,
        Payload : products
    }
}