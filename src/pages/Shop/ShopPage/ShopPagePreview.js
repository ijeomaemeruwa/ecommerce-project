import React from 'react'
import ShopPageItem from '../ShopPage/ShopPageItem'
import { ShopButton } from '../../../components/Buttons/ShopButton/ShopButton'

import { Link } from 'react-router-dom'

export const ShopPagePreview = ({ category, items }) => {
    return (
    <>
    <div className="preview text-center">
      <h2>{category}</h2>

    <div className="preview_content">
        {
            items
            .filter((item, index) => index < 4)
            .map((item) => (
                <ShopPageItem 
                key={item.id}
                item={item}
                >
                </ShopPageItem>
            ))
        } 
    </div> 
    <div className="shop_preview_btn">
    <ShopButton type="button" className="shop_btn">
    <Link to="/makeupshop">SHOP COLLECTION</Link>
    </ShopButton> 
    </div>
    </div>
    </>
    )
}
