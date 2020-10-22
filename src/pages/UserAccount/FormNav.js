import React from 'react'
import '../UserAccount/UserAccountPage.scss'

export const FormNav = ({selectedTab, onClick}) => {
    return (
    <div className="form_nav">
       <ul className="nav nav-tabs" id="myTab" role="tablist">

        <li className="nav-item">
          <a 
          className={"nav-link " + (selectedTab === 'createaccount' ? 'active': '')} 
          onClick={() => onClick("createaccount")}
          id="createaccount-tab" data-toggle="tab" href="#createaccount" 
          role="tab" aria-controls="createaccount" 
          aria-selected={selectedTab === 'createaccount'}>
            NEW TO OATTS?
         </a>
        </li>

        <li className="nav-item">
          <a 
          className={"nav-link " + (selectedTab === 'login' ? 'active': '')} 
          onClick={() => onClick("login")}
          id="login-tab" data-toggle="tab" href="#login" 
          role="tab" aria-controls="login" 
          aria-selected={selectedTab === 'login'}>
            ALREADY REGISTERED?
         </a>
        </li>

      </ul>      
    </div>
)
}
