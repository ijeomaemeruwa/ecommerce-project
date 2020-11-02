import React from 'react'
import { connect } from 'react-redux'
import { toggleCart } from '../../../redux/actions/cart.action'
import '../CartIcon/cartIcon.scss'
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';

const CartIcon = ({toggleCart}) => {
return (
    <>
    <div className="cart_icon" onClick={toggleCart}>
     <LocalMallRoundedIcon className="shopping_icon" />
     <span className="shopping_item_count">
         0
    </span>   
    </div>      
    </>
    )
}

const mapDispatchToProps = dispatch => ({
   toggleCart: () => dispatch(toggleCart) 
})

export default connect(null, mapDispatchToProps)(CartIcon)
