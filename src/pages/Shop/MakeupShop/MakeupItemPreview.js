import React from 'react'

export const MakeupItemPreview = ({ name, price, imageURL }) => {
    return (
    <div className="makeup_preview">
    <div className="item_image" style={{ backgroundImage: `url(${imageURL})` }} />

    <div className="item_footer">
     <span className="title">{name}</span>
     <span>{price}</span>
    </div>

    </div>     
    )
}
