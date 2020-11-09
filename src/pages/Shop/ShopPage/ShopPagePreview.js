import React from 'react'
import ShopItem from '../ShopPage/ShopItem'

const ShopPagePreview = ({ title, items }) => {
    return (
    <>
    <div className="preview text-center">
      <h2>{title}</h2>

    <div className="preview_content">
        {
            items.map((item) => (
                <ShopItem 
                key={item.id}
                item={item}
                >
                </ShopItem>
            ))
        } 
    </div> 
    </div>
    </>
    )
}

export default ShopPagePreview;