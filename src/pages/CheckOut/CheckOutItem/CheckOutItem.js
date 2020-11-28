import React from 'react'
import { connect } from 'react-redux'
import { clearItem, addItem, removeItem } from '../../../redux/actions/cart.action'
import './checkoutitem.scss'

import { MdClear } from 'react-icons/md'

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageURL, price, quantity } = cartItem
    return (
    <>
    <div className="checkout_items">
    <div className="img_container">
    <img src={imageURL} alt="product" />
    </div>
    <span className="name">{name}</span> 
    <span className="quantity">
    <div className="decrease" onClick={() => removeItem(cartItem)}> - </div>
    <span className="value">{quantity}</span>
    <div className="increase" onClick={() => addItem(cartItem)}> + </div>
    </span>

    <span className="price">{price}</span>   
    <div className="remove_btn" onClick={() => clearItem(cartItem)}>
     <MdClear />
    </div>
    </div>       
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})    


export default connect(null, mapDispatchToProps)(CheckOutItem)
