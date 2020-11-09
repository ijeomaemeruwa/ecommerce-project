import React, { Component } from 'react'
import { BestSeller } from '../BestSellers/BestSeller'
import CustomButton from '../../components/CustomButton/CustomButton'

import { Link } from 'react-router-dom'

export class BestSellerData extends Component {
    state = {
        bestSeller: [
            {
                id: '1',
                image: 'https://images.asos-media.com/products/clinique-big-genius-little-genius-dramatically-different-moisturising-lotion-set/21497401-1-nocolour?$n_320w$&wid=317&fit=constrain',
                product: 'Clinique',
                size: 'medium'
            },
            {
                id: '2',
                image: 'https://images.asos-media.com/products/revolution-skincare-pink-clay-detoxifying-face-mask/12301686-1-nocolour?$n_320w$&wid=317&fit=constrain',
                product: 'Revolution',
                size: 'medium'
            },
            {
                id: '3',
                image: 'https://images.asos-media.com/products/bobbi-brown-summer-glow-trio/20582750-1-nocolour?$n_320w$&wid=317&fit=constrain',
                product: 'Bobbi Brown',
                size: 'medium'
            },
            {
                id: '4',
                image: 'https://images.asos-media.com/products/farsali-volcanic-elixir-30ml/14039639-1-nocolour?$n_320w$&wid=317&fit=constrain',
                product: 'Farsali',
                size: 'medium'
            },
        ]
    }
    render() {
        const { bestSeller } = this.state
    return (
    <> 
    <section className="text-center my-5 bestsellers">
        <h3>BEST SELLERS</h3>
        <p>Shop from our best sellers collection.</p>
    <div className="bestseller_section row">
      {
        bestSeller.map(({id, ...otherBestSellerProps}) => (
        <BestSeller 
        key={id}
        {...otherBestSellerProps}
        />
        ))
      }
      </div> 
      <CustomButton type="button">
      <Link to="/shoppage" className="link_btn custom_btn"
      >
      SHOP COLLECTION
      </Link>
      </CustomButton> 
      </section>
    </>
    )
 }
}
