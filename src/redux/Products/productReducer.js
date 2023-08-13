/* eslint-disable no-unreachable */
/* eslint-disable no-case-declarations */
import {
    ADD_CART,
    ADD_PRODUCT,
    DECREMENT_PRODUCT,
    INCREMENT_PRODUCT,
    REMOVE_ITEM
} from "./actionTypes";


let initialState = {
    products: [{
            id: 7768,
            productName: "Shoes",
            category: "Men's",
            image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            price: 195,
            quantity: 14

        },
        {
            id: 4571,
            productName: "Perfume",
            category: "Women's",
            image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&q=80",
            price: 70,
            quantity: 8

        },
        {
            id: 9874,
            productName: "Bag",
            category: "Style",
            image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=728&q=80",
            price: 780,
            quantity: 4

        }

    ],
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

            //Get the product from product array that have to be added to cart
            state.products.find(product => {
                product.id == action.payload && (productToCart = product);
            })

            //Check if the product already exists in cart
            let alreadyInCart = state.cart.find(cartItem => cartItem.id === productToCart.id)


            //If the product does exist return previous cart
            if (alreadyInCart) {
                updateCart = [...state.cart]
            } else {
                //If the product  does't exist return  cart with the product 
                updateCart = [...state.cart, {
                    ...productToCart,
                    totalQuantity: 1
                }]
            }

            //Update Product
            let updateProduct
            if (alreadyInCart) {
                updateProduct = [...state.products]
            } else {
                updateProduct = state.products.map((product) => {
                    if (product.id === action.payload) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        }
                    }
                    return product
                })
            }



            return {
                cart: updateCart,
                    products: updateProduct,
            }


            //********Decrement the quantity of the cart product Case 
            case DECREMENT_PRODUCT:

                //Update the quantity of from Product store
                let decrementProductQuantity

                state.products.find(product => {
                    if (product.id == action.payload.id) {
                        decrementProductQuantity = {
                            ...product,
                            quantity: product.quantity + 1
                        }
                        return decrementProductQuantity
                    }
                })

                //********PUSH the updated product into store
                let decrementProduct = []
                state.products.map(product => {
                    if (product.id !== decrementProductQuantity.id) {
                        decrementProduct.push(product)
                    } else {
                        decrementProduct.push(decrementProductQuantity)
                    }
                })

                //Update the quantity of from Cart store
                let decrementCartQuantity
                state.cart.find(cart => {
                    if (cart.id == action.payload.id) {
                        decrementCartQuantity = {
                            ...cart,
                            totalQuantity: cart.totalQuantity - 1
                        }
                        return decrementCartQuantity
                    }
                })

                //Push the updated product into store
                let decrementNewCart = []

                state.cart.map(cart => {
                    if (cart.id !== decrementCartQuantity.id) {
                        decrementNewCart.push(cart)
                    } else {
                        decrementNewCart.push(decrementCartQuantity)
                    }
                })

                return {
                    cart: decrementNewCart,
                        products: decrementProduct
                }

                //********Increment the quantity of the cart product Case 
                case INCREMENT_PRODUCT:
                    //Update the quantity of from Product store
                    let updatedProductQuantity
                    state.products.find(product => {
                        if (product.id == action.payload.id) {
                            updatedProductQuantity = {
                                ...product,
                                quantity: product.quantity - 1
                            }
                            return updatedProductQuantity
                        }
                    })

                    //Push the updated product into store
                    let newProduct = []
                    state.products.map(product => {
                        if (product.id !== updatedProductQuantity.id) {
                            newProduct.push(product)
                        } else {
                            newProduct.push(updatedProductQuantity)
                        }
                    })

                    //Update the quantity of from Cart store
                    let updatedCartQuantity
                    state.cart.find(cart => {
                        if (cart.id == action.payload.id) {
                            updatedCartQuantity = {
                                ...cart,
                                totalQuantity: cart.totalQuantity + 1
                            }
                            return updatedCartQuantity
                        }
                    })

                    //Push the updated product into store
                    let newCart = []
                    state.cart.map(cart => {
                        if (cart.id !== updatedCartQuantity.id) {
                            newCart.push(cart)
                        } else {
                            newCart.push(updatedCartQuantity)
                        }
                    })

                    return {
                        cart: newCart,
                            products: newProduct
                    }

                    case REMOVE_ITEM:

                        const cartItemsAfterRemove = [];
                        state.cart.filter(item => {
                            if (item.id !== action.payload) cartItemsAfterRemove.push(item)
                        })

                        return {
                            ...state,
                            cart: cartItemsAfterRemove
                        }

                        default:
                            return state

    }
}

export
default productReducer