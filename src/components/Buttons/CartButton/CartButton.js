import React from 'react'
import '../CartButton/cartbutton.scss'

const CartButton = ({inverted}) => {
    return (
    <>
    <button 
    className={`${inverted ? 'inverted': ''} cart_btn `}>
        ADD TO CART  
    </button>    
    </>
    )
}

export default CartButton
