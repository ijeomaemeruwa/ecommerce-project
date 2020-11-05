import React, {Fragment} from 'react'
import MakeupItem from '../MakeupShop/MakeupItem'

import '../ShopPage/ShopPage.scss'

const MakeupPreview = ({category, items}) => {
    return (
        <Fragment className="preview_content">
        {
            items.map(({ id, ...otherShopItemProps }) => (
            <MakeupItem 
            key={id}
            {...otherShopItemProps}
            >
            </MakeupItem>
            ))
        }
        </Fragment>
    )
}

export default MakeupPreview
