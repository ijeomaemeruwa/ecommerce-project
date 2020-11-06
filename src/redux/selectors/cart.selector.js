import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItem =  createSelector(
[selectCart],
cart => cart.cartItems
);

export const selectCartHidden = createSelector(
[selectCart],
cart => cart.hidden
);


export const selectCartItemsCount = createSelector(
[selectCartItem],
cartItems => 
    cartItems.reduce(
    (totalItems, cartItem) => 
    totalItems + cartItem.quantity, 0)

);