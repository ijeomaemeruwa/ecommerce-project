import React from 'react'
import './Showcase.scss'
import { Link } from 'react-router-dom'

export const Showcase = () => {
    return (
    <div>
    <section className="showcase">
    <div className="showcase_content row mx-auto">

    <div className="image_one col-md-6 my-3">
    <div className="text-center content">
    <img src={require('../../assets/images/image1.jpg')} alt="makeup" />
    <div className="showcase_item">
    <p>Make Up</p>
     <h4>GLAM TIME</h4>
    <Link to="/makeuppage" className="showcase_links">SHOP NOW</Link>
    </div>
    </div>
    </div>

    <div className="image_two col-md-6 my-3">
    <div className="text-center content">
    <img src={require('../../assets/images/image4.jpg')} alt="makeup" />
    <div className="showcase_item">
    <p>Skin Care</p>
    <h4>SKIN LIKE GOLD</h4>
    <Link to="/skincarepage" className="showcase_links">SHOP NOW</Link>
    </div>
    </div> 
    </div>

    </div>
    </section>
    </div>
)
}
