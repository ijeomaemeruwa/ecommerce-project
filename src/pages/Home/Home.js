import React from 'react'
import { Hero } from '../../components/Hero/Hero'
import { Showcase } from '../../components/Showcase/Showcase'
import { Services } from '../../components/Services/Services'
import { BestSellerData } from '../../components/BestSellers/BestSellerData'
import { NewsLetter } from '../../components/NewsLetter/NewsLetter'
import { Footer } from '../../components/Footer/Footer'

export const Home = () => {
    return (
    <div>
      <Hero /> 
      <Services />
      <Showcase />  
      <BestSellerData />  
      <NewsLetter />  
      <Footer />
    </div>
    )
}
