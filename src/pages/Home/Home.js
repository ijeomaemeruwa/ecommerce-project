import React from 'react'
import { Hero } from '../../sections/Hero/Hero'
import { Showcase } from '../../sections/Showcase/Showcase'
import { Services } from '../../sections/Services/Services'
import { BestSellerData } from '../../sections/BestSellers/BestSellerData'
import { NewsLetter } from '../../sections/NewsLetter/NewsLetter'
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
