import React from 'react'
import { connect } from 'react-redux'
import '../CartIcon/cartIcon.scss'
import { BsBag } from 'react-icons/bs'
import { selectCartItemsCount } from '../../../redux/selectors/cart.selector'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({itemCount}) => {
return (
    <>
    <div className="cart_icon">
     <BsBag className="shopping_icon" />
     <span className="shopping_item_count">
         {itemCount}
    </span>   
    </div>      
    </>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


export default connect(mapStateToProps)(CartIcon)
