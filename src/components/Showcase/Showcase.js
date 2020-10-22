import React from 'react'
import '../Showcase/Showcase.scss'
import { Link } from 'react-router-dom'

export const Showcase = ({ text, image, size }) => {
    return (
    <div>
    <div className={`${size} card_item`} >
    <div className="bg_image" style={{ backgroundImage: `url(${image})` }} />

    <div className="card_content">
     <h2 className="title">{text}</h2><br />
     <Link to="/shoppage" className="item_link">SHOP NOW</Link>
    </div>

    </div>      
    </div>
)
}
