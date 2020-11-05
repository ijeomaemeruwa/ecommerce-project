import React, {Fragment} from 'react'
import '../ShopPage/ShopPage.scss'
import SHOP_ITEM_DATA from '../ShopData/ShopData'
import { ShopPagePreview } from '../ShopPage/ShopPagePreview'

export class ShopPage extends React.Component {
    state = {
        collection: SHOP_ITEM_DATA
    }

    render() {
        const { collection } = this.state
        return (
            <Fragment className="shop_page">
            {
                collection.map(({ id, ...otherShopPageProps }) => (
                <ShopPagePreview 
                key={id}
                {...otherShopPageProps}
                />
            ))
            }
              <hr className="hr" style={{width: "100%"}}/> 
            </Fragment>
        )
    }
}