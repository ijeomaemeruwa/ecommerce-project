import React from 'react'
import { Currency } from '../../Currency/Currency'
import { Header } from '../Header/Header'
import { Home } from '../../../pages/Home/Home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { MakeupPage } from '../../../pages/Shop/MakeupShop/MakeupPage'
import { UserAccountPage } from '../../../pages/UserAccount/UserAccountPage'

export const NavBar = () => {
    return (
    <div>
    <Router>
     <Currency />
     <Header />


     <Switch>
        <Route exact path="/"><Home /></Route>
         <Route path="/makeuppage" component={MakeupPage} />
         <Route path="/useraccountpage" component={UserAccountPage} />
     </Switch>

    </Router>
    </div>
    )
}
