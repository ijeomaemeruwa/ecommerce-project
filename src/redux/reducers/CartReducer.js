import CartTypes from '../types/cart.types'
import { addItemToCart, removeItemFromCart } from '../../components/Cart/CartUtils/CartUtils'

const INITIAL_STATE = {  
    cartItems: []     //storing items added to cart
}


const CartReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => 
                    cartItem.id !== action.payload.id
                )
            }
        case CartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItem, action.payload)
            }
        default: 
        return state;
    }
}

export default CartReducer;