import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItem =  createSelector(
[selectCart],
cart => cart.cartItems
);


export const selectCartItemsCount = createSelector(
[selectCartItem],
cartItems => 
    cartItems.reduce((totalItems, cartItem) => 
    totalItems + cartItem.quantity, 0)

);

export const selectTotalItems = createSelector(
[selectCartItem],
cartItems => 
    cartItems.reduce((totalItems, cartItem) => 
    totalItems + cartItem.quantity * cartItem.price, 0)
)