import React from 'react'
import '../ShopPage/ShopPage.scss'

export const ShopPageItem = ({ id, name, price, imageURL }) => {
    return (
    <div className="preview_items">
    <div className="image" style={{ backgroundImage: `url(${imageURL})`}} />

    <div className="preview_footer">
     <span className="product_name">{name}</span>
     <span className="product_price">{price}</span>
    </div>       
    </div>
    )
}
