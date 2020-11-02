import React from 'react'
import '../Hero/Hero.scss'
import { ShopButton } from '../Buttons/ShopButton/ShopButton'

export const Hero = () => {
    return (
    <div className="hero">
    <div className="overlay">
    <div className="hero_content">
    <h3>BEAUTY IS A NECESSITY</h3>
    <p className="mt-5 col-md-6">
        Shop authentic beauty and skin care products delivered to your doorstep.
    </p>
    <ShopButton type="button" className="hero_btn">
        SHOP NOW
    </ShopButton>
    </div>
    </div>       
    </div>
    )
}
