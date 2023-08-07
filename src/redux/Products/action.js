import {
    ADD_CART,
    ADD_PRODUCT,
} from "./actionTypes"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = (id) => {
    return {
        type: ADD_PRODUCT,
        payload: id
    }
}


export const addCart = (value) => {
    return {
        type: ADD_CART,
        payload: value
    }
}