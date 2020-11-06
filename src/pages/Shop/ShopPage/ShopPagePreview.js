import React from 'react'
import ShopItem from '../ShopPage/ShopItem'
//import { ShopButton } from '../../../components/Buttons/ShopButton/ShopButton'

//import { Link } from 'react-router-dom'

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