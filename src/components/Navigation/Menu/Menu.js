import React from 'react'
import '../Menu/Menu.scss'
import { withRouter } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu">
        <div className="menu_content row">

        <div className="makeup col-md-6 col-sm-6 text-center">
         <h3><a href="/makeuppage" >MAKEUP</a></h3>
        </div>
        
        <div className="skincare col-md-6 col-sm-6 text-center">
         <h3><a href="/skincare" >SKIN CARE</a></h3>
        </div>

        </div>  
        </div>
    )
}

export default withRouter(Menu);