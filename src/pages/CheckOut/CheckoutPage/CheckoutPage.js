import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItem, selectTotalItems } from '../../../redux/selectors/cart.selector'

import CheckOutItem from '../CheckOutItem/CheckOutItem'
import StripeButton from '../../../components/Payment/StripeButton'

import './checkoutpage.scss'

const CheckoutPage = ({cartItems, total}) => {
    return (
      <>
      <section className="checkout">
      <div className="checkout_header">
        <div className="sections">
          <span>PRODUCT</span>
        </div>
        <div className="sections">
          <span></span>
        </div>
        <div className="sections">
          <span>QUANTITY</span>
        </div>
        <div className="sections">
          <span>PRICE</span>
        </div>
        <div className="sections">
          <span>REMOVE</span>
        </div>
      </div>
      </section> 

      {
        cartItems.map(cartItem => (
          <CheckOutItem 
          key={cartItem.id}
          cartItem={cartItem}
          />
        ))
      } 

      <div className="total">
        <span>TOTAL: ${total}</span>
        <StripeButton price={total} />
      </div>
      </>
    )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectTotalItems
})

export default connect(mapStateToProps)(CheckoutPage)
