import React, { Fragment, Component } from 'react'
import SHOP_ITEM_DATA from '../ShopData/ShopData'
import MakeupPreview from '../MakeupShop/MakeupPreview'

import '../ShopPage/ShopPage.scss'

class MakeupShop extends Component {
    state = {
        makeupCollection: SHOP_ITEM_DATA[1]
    }
    render() {
    const { makeupCollection } = this.state
    return (
        <Fragment className="shop_page">
        {
            makeupCollection.map(({ id, ...otherShopPageProps }) => (
            <MakeupPreview 
            key={id}
            {...otherShopPageProps}
            />
            ))
        }
        </Fragment>
        )
    }
}

export default MakeupShop