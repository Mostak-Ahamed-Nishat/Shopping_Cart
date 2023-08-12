import { REMOVE_PRODUCT } from "./actionTypes"

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
}
