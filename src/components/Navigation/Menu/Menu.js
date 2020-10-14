import React from 'react'
import '../Menu/Menu.css'

export const Menu = () => {
    return (
        <div className="menu">
        <div className="menu_content">

        <div>
         <h3 className="makeup"><a href="/makeup" >MAKEUP</a></h3>
        </div>
        
        <div className="skincare">
         <h3><a href="/skincare" >SKIN CARE</a></h3>
        </div>

        </div>  
        </div>
    )
}
