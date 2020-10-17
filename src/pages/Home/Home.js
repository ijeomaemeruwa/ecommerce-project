import React from 'react'
import { Menu } from '../../components/Navigation/Menu/Menu'
import { Hero } from '../../components/Hero/Hero'
import { ShowcaseData } from '../../components/Showcase/ShowcaseData'
import { QuotesData } from '../../components/Quotes/QuotesData'
import { BestSellerData } from '../../components/BestSellers/BestSellerData'
import { NewsLetter } from '../../components/NewsLetter/NewsLetter'

export const Home = () => {
    return (
    <div>
      <Menu />
      <Hero /> 
      <ShowcaseData />  
      <QuotesData />
      <BestSellerData />  
      <NewsLetter />  
    </div>
    )
}
