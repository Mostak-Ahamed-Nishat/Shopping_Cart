import {
    ADD_CART,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from "./actionTypes";

const initialState = {
    products: [],
    cart: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, {
                    id: Date.now(),
                    ...action.payload
                }]
            }
            case REMOVE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter((product) => product.id !== action.payload)
                }

                case ADD_CART:
                    return {
                        ...state,
                        cart: [...state.cart, {
                            id: Date.now(),
                            ...action.payload
                        }]
                    }

                    default:
                        return state
    }
}

export default productReducer