//Updating the amount of items in cart with the quantity referencing the particular item added

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        {...cartItems, quantity: cartItem.quantity -1}
        : cartItem
        );
}