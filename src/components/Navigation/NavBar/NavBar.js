import React from 'react'
import { Currency } from '../../Currency/Currency'
import { Header } from '../Header/Header'
import { Home } from '../../../pages/Home/Home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export const NavBar = () => {
    return (
    <div>
    <Router>
     <Currency />
     <Header />


     <Switch>
        <Route exact path="/"><Home /></Route>
     </Switch>

    </Router>
    </div>
    )
}
