import React from 'react'
import '../MakeupShop/MakeupPage.scss'
import MAKEUP_ITEM_DATA from '../MakeupShop/MakeupItemData'
import { MakeupItemPreview } from '../MakeupShop/MakeupItemPreview'

export class MakeupPage extends React.Component {
    state = {
        makeupCollection: MAKEUP_ITEM_DATA
    }

    render() {
        const { makeupCollection } = this.state
        return (
            <div className="makeup_shop">
            {
                makeupCollection.map(({ id, ...otherMakeupProps }) => (
                <MakeupItemPreview 
                key={id}
                {...otherMakeupProps}
                />
            ))
            }
            </div>
        )
    }
}