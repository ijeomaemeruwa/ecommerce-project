import CartTypes from '../types/cart.types'
import { addItemToCart } from '../../components/Cart/CartUtils/CartUtils'

const INITIAL_STATE = {
    hidden: true,     //cart modal
    cartItems: []     //storing items added to cart
}


const CartReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default: 
        return state;
    }
}

export default CartReducer;