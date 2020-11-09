import React from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../../redux/actions/user.action'

import { auth, createUserProfile } from '../../../firebase/firebase.utils'

import { Currency } from '../../Currency/Currency'
import Header from '../Header/Header'
import { Home } from '../../../pages/Home/Home'
import { ShopPage } from '../../../pages/Shop/ShopPage/ShopPage'
import { CreateAccount } from '../../../pages/UserAuth/CreateAccount'
import { Login } from '../../../pages/UserAuth/Login'
import CheckoutPage from '../../../pages/CheckOut/CheckoutPage/CheckoutPage'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


class NavBar extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
        const userRef = await createUserProfile(userAuth)

    userRef.onSnapshot(snapShot => {
    setCurrentUser({
        id: snapShot.id,
        ...snapShot.data()
    });
    });   
    } 
    setCurrentUser(userAuth)
})
}

componentWillUnmount() {
    this.unsubscribeFromAuth();
}

    render() {
    return (
    <>
     <Router>
     <Currency />
     <Header />

     <Switch>
        <Route exact path="/"><Home /></Route>
         <Route exact path="/shoppage" component={ShopPage} />
         <Route exact path="/checkoutpage" component={CheckoutPage} />
         <Route exact path="/createaccount" 
         render={() => this.props.currentUser ? (<Redirect to="/" />) : (<CreateAccount />)}  
         />
         <Route exact path="/login" 
         render={() => this.props.currentUser ? (<Redirect to="/" />) : (<Login />)}  
         />
     </Switch>

    </Router>
    </>
    )
}
}
const mapStateToProps = ({ user }) => ({
   currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)