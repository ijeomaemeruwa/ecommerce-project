import React from 'react'

export const ShopButton = ({ children, ...otherShopButtonProps}) => {
    return (
    <div>
        <button className="shop_btn" {...otherShopButtonProps}>
        {children}
        </button>     
    </div>
)
}
