import React from 'react'

import { Currency } from '../../Currency/Currency'
import Header from '../Header/Header'
import { Home } from '../../../pages/Home/Home'
import { ShopPage } from '../../../pages/Shop/ShopPage/ShopPage'
import { CreateAccount } from '../../../pages/UserAuth/CreateAccount'
import { Login } from '../../../pages/UserAuth/Login'
import MakeupShop from '../../../pages/Shop/MakeupShop/MakeupShop'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";



class NavBar extends React.Component {

    render() {
    return (
    <>
     <Router>
     <Currency />
     <Header />

     <Switch>
        <Route exact path="/"><Home /></Route>
         <Route path="/shoppage" component={ShopPage} />
         <Route path="/createaccount" 
         render={() => this.props.currentUser ? (<Redirect to="/" />) : (<CreateAccount />)}  
         />
         <Route path="/login" 
         render={() => this.props.currentUser ? (<Redirect to="/" />) : (<Login />)}  
         />
         <Route path="/makeupshop" component={MakeupShop} />
     </Switch>

    </Router>
    </>
    )
}
}


export default NavBar