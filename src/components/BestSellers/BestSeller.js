import React from 'react'
import '../BestSellers/BestSeller.scss'

export const BestSeller = ({image, product, productPrice, productLink, size}) => {
    return (
    <div>
    <div className={`${size} product_grid`} >
    <div
    className="product_image"
    style={{ backgroundImage: `url(${image})` }}
    />
    </div> 

    <div className="product_details">
     <p className="title text-center">{product}</p>
    </div>

    </div>
    )
}
