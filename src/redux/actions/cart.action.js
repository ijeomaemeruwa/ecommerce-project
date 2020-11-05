import CartTypes from '../types/cart.types'

export const toggleCart = () => ({
    type: CartTypes.TOGGLE_CART
})

export const addItem = (items) => ({
    type: CartTypes.ADD_ITEM,
    payload: items
})