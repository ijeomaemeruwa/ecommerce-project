import React from 'react'
import '../ShopPage/ShopPage.scss'

const MakeupItem = ({ name, price, imageURL }) => {
    return (
    <>
    <div className="preview_items mx-auto">
    <div className="image" style={{ backgroundImage: `url(${imageURL})`}} />

    <div className="preview_footer">
     <span className="makeup_name">{name}</span>
     <span className="product_price">{price}</span>
    </div>     
    </div>
    </> 
    )
}

export default MakeupItem
