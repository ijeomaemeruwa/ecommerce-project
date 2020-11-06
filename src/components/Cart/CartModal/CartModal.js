import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './cartmodal.scss'

import CartItems from '../CartItems/CartItems'
import { selectCartItem } from '../../../redux/selectors/cart.selector'
import { createStructuredSelector } from 'reselect'

const CartDropDown = ({cartItems, history}) => {
    return (
        <>
        <div className="cart_modal">
        <div className="cart_items">
        {
          cartItems.length ? (
          cartItems.map(item => (
              <CartItems 
              key={item.id} 
              item={item} />
          ))
          ): (
            <span className="cart_message">YOUR CART IS EMPTY</span>
          )}
        </div>
        <button onClick={() => history.push('/checkoutpage')} className="button">CHECKOUT</button>    
        </div>  
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
