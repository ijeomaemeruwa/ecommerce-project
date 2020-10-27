import React from 'react'
import '../Showcase/Showcase.scss'
import { Link } from 'react-router-dom'

export const Showcase = () => {
    return (
    <div>
    <section className="showcase">
    <div className="showcase_content row">

    <div className="image_one col-md-6">
    <div className="text-center content">
    <span>Make Up</span>
     <p>GLAM TIME</p>
    <Link to="/makeuppage" className="showcase_links">SHOP NOW</Link>
    </div>
    </div>

    <div className="image_two m-auto col-md-6">
    <div className="text-center content">
    <span>Skin Care</span>
    <p>SKIN LIKE GOLD</p>
    <Link to="/skincarepage" className="showcase_links">SHOP NOW</Link>
    </div> 
    </div>

    </div>
    </section>
    </div>
)
}
