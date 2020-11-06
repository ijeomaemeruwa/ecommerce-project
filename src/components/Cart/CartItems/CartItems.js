import React from 'react'
import '../CartItems/cartitems.scss'

const CartItems = ({ item: imageURL, price, name, quantity }) => {
    return (
    <>
    <div className="cart_items">
    <img src={imageURL} 
    className="cart_img" 
    alt="item" 
    />     
    <div className="item_content">
     <span className="product">{name}</span>
     <span className="prpduct_price">${price}</span>     
    </div>   
    </div>       
    </>
    )
}

export default CartItems
