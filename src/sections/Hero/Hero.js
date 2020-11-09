import React from 'react'
import './Hero.scss'
import { Link } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'

export const Hero = () => {
    return (
    <div className="hero">
    <div className="overlay">
    <div className="hero_content">
    <h3>BEAUTY IS A NECESSITY</h3>
    <p className="mt-5 col-md-6 col-sm-10">
        Shop authentic beauty and skin care products delivered to your doorstep.
    </p>
    <CustomButton type="button">
    <Link to="/shoppage" className="link_btn"
    >
      SHOP NOW
    </Link>
    </CustomButton>
    </div>
    </div>       
    </div>
    )
}
