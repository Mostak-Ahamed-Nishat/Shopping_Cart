import {
    ADD_CART,
    ADD_PRODUCT,
    DECREMENT_PRODUCT,
    INCREMENT_PRODUCT,
    REMOVE_ITEM
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

export const incrementProductQuantity = ({
    id,
    value
}) => {
    return {
        type: INCREMENT_PRODUCT,
        payload: {
            id: id,
            value: value
        }
    }
}

export const decrementProductQuantity = ({
    id,
    value
}) => {
    return {
        type: DECREMENT_PRODUCT,
        payload: {
            id: id,
            value: value
        }
    }
}

export const removeItemFormCart = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}