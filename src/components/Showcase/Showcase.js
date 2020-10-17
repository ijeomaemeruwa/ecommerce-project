import React from 'react'
import '../Showcase/Showcase.scss'

export const Showcase = ({ text, image, size }) => {
    return (
    <div>
    <div className={`${size} card_item`} >
    <div
    className="bg_image"
    style={{
        backgroundImage: `url(${image})`
      }}
    />
    <div className="card_content">
     <h2 className="title">{text}</h2><br />
     <p className="item_link">SHOP NOW</p>
    </div>
    </div>      
    </div>
)
}
