import React, { Component } from 'react'
import { BestSeller } from '../BestSellers/BestSeller'
import { ShopButton } from '../ShopButton/ShopButton'

export class BestSellerData extends Component {
    state = {
        bestSeller: [
            {
                id: '1',
                image: 'https://www.clinique.com/media/export/cms/products/600x750/cl_sku_6EM601_600x750_0.png',
                product: 'Clinique',
                productPrice: '$25',
                productLink: '',
                size: 'medium'
            },
            {
                id: '2',
                image: 'https://www.milkmakeup.com/dw/image/v2/BBWR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9ef14ebf/images/large/hydro-grip-primer-cap.png?sw=260&sh=360&sm=fit',
                product: 'MilkMakeup',
                productLink: '',
                size: 'medium'
            },
            {
                id: '3',
                image: 'https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg',
                product: 'BOBBI BROWN',
                productLink: '',
                size: 'medium'
            },
            {
                id: '4',
                image: 'https://cdn.shopify.com/s/files/1/1832/7347/products/RGE30ml_main_700x.png?v=1577369947',
                product: 'Farsali',
                productLink: '',
                size: 'medium'
            },
        ]
    }
    render() {
        const { bestSeller } = this.state
    return (
    <div className="text-center my-5 bestsellers">
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
      <ShopButton type="button">
          SHOP COLLECTION
      </ShopButton>
    </div>
    )
 }
}
