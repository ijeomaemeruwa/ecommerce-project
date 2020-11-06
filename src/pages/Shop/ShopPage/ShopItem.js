import React from 'react'
import { connect } from 'react-redux'
import '../ShopPage/ShopPage.scss'

import CartButton from '../../../components/Buttons/CartButton/CartButton'
import { addItem } from '../../../redux/actions/cart.action'

const ShopItem = ({ item, addItem }) => {
    const { name, price, imageURL } = item
    return (
    <>
    <div className="preview_items mx-auto">
    <div className="image" style={{ backgroundImage: `url(${imageURL})`}} />

    <div className="preview_footer">
     <span className="product_name">{name}</span>
     <span className="product_price">{price}</span>
     <CartButton 
      onClick={() => addItem(item)}
     />
    </div>
    </div>
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) 
})

export default connect(mapDispatchToProps)(ShopItem)

