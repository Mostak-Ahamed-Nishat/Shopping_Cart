/* eslint-disable no-case-declarations */
import {
    ADD_CART,
    ADD_PRODUCT
} from "./actionTypes";


let initialState = {
    products: [],
    cart: []
}



let productReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state, products: [...state.products, {
                    id: Date.now(),
                    ...action.payload
                }]
            };


        case ADD_CART:

            let updateCart


            let productToCart
            state.products.map(product => {
                product.id == action.payload && (productToCart = product);
            })


            let alreadyInCart = state.cart.find(cartItem => cartItem.id === action.payload)

            if (alreadyInCart) {
                updateCart = [...state.cart]
            } else {
                updateCart = [...state.cart, productToCart]
            }

            console.log("updateCart ==>")
            console.log(updateCart);

            //Update Product
            let updateProduct = state.products.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product
            })
            return {
                cart: updateCart,
                    products: updateProduct,
            }



            default:
                return state

    }
}

export
default productReducer