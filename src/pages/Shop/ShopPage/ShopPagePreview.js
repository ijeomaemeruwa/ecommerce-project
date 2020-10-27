import React from 'react'
import { ShopPageItem } from '../ShopPage/ShopPageItem'

export const ShopPagePreview = ({ category, items }) => {
    return (
    <div className="preview">
      <h2>{category}</h2>

    <div className="preview_content">
        {
            items
            .filter((item, index) => index < 4)
            .map(({ id, ...otherShopItemProps }) => (
                <ShopPageItem 
                key={id}
                {...otherShopItemProps}
                >
                </ShopPageItem>
            ))
        } 
    </div> 
    </div>
    )
}
