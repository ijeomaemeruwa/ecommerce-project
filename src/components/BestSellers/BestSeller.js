import React from 'react'
import '../BestSellers/BestSeller.scss'

export const BestSeller = ({image, product, productPrice, productLink, size}) => {
    return (
    <div>

    <div className={`${size} product_grid col-md-3 col-sm-5 mx-auto`} >
    <div className="product_image" style={{ backgroundImage: `url(${image})` }} />
    
    <div className="product_details">
     <p className="title">{product}</p>
    </div>
    </div>
    </div>
    )
}
