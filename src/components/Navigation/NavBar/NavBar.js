import React from 'react'
import { Currency } from '../../Currency/Currency'
import Header from '../Header/Header'
import { Home } from '../../../pages/Home/Home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ShopPage } from '../../../pages/Shop/ShopPage/ShopPage'
import { UserAccountPage } from '../../../pages/UserAccount/UserAccountPage'
import { CreateAccount } from '../../../pages/UserAccount/CreateAccount'
import { Login } from '../../../pages/UserAccount/Login'


class NavBar extends React.Component {

    render() {
    return (
    <div>
     <Router>
     <Currency />
     <Header />

     <Switch>
        <Route exact path="/"><Home /></Route>
         <Route path="/shoppage" component={ShopPage} />
         <Route path="/useraccountpage" component={UserAccountPage} />
         <Route path="/createaccount" component={CreateAccount} />
         <Route path="/login" component={Login} />
     </Switch>

    </Router>
    </div>
    )
}
}


export default NavBar