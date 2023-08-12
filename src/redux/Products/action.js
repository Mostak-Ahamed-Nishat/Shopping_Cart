import {
    ADD_CART,
    ADD_PRODUCT
} from "./actionTypes"


export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}


export const addCart = (id) => {
    return {
        type: ADD_CART,
        payload: id
    }
}