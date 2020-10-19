import React, { Component } from 'react'
import { BestSeller } from '../BestSellers/BestSeller'

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
                productPrice: '$25',
                productLink: '',
                size: 'medium'
            },
            {
                id: '3',
                image: 'https://www.narscosmetics.com/dw/image/v2/BBSK_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dw805388ee/hi-res/0607845066255.jpg?sw=856&sh=750&sm=fit',
                product: 'NARS',
                productPrice: '$25',
                productLink: '',
                size: 'medium'
            },
            {
                id: '4',
                image: 'https://cdn.shopify.com/s/files/1/1832/7347/products/RGE30ml_main_700x.png?v=1577369947',
                product: 'Farsali',
                productPrice: '$25',
                productLink: '',
                size: 'medium'
            },
        ]
    }
    render() {
        const { bestSeller } = this.state
    return (
    <div className="bestseller_section row mx-auto my-5">
        <h3>BestSellers</h3>
      {
        bestSeller.map(({id, ...otherBestSellerProps}) => (
            <BestSeller 
            key={id}
            {...otherBestSellerProps}
            />
        ))
      }          
    </div>
    )
 }
}
