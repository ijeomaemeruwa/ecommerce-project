import React from 'react'
import Menu from '../../components/Navigation/Menu/Menu'
import { Hero } from '../../components/Hero/Hero'
import { ShowcaseData } from '../../components/Showcase/ShowcaseData'
import { ServicesData } from '../../components/Services/ServicesData'
import { BestSellerData } from '../../components/BestSellers/BestSellerData'
import { NewsLetter } from '../../components/NewsLetter/NewsLetter'
import { Footer } from '../../components/Footer/Footer'

export const Home = () => {
    return (
    <div>
      <Menu />
      <Hero /> 
      <ShowcaseData />  
      <ServicesData />
      <BestSellerData />  
      <NewsLetter />  
      <Footer />
    </div>
    )
}
