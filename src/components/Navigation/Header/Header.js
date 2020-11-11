import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import '../Header/Header.scss'

import { Link } from 'react-router-dom'
import { auth } from '../../../firebase/firebase.utils';

import CartIcon from '../../Cart/CartIcon/CartIcon'

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/selectors/user.selector';


const Header = ({ currentUser, history}) => {
   
    return (
    <div className="header">
    <div className="header_section sticky-top">

    <div className="row header_links">
    <span><Link to="/shoppage" className="shop">Shop</Link></span>
    </div>

    <h2><Link to="/" className="logo text-center">OATTS</Link></h2>

    <div className="header_features row">
    <span>
    <Link to="/createAccount" className="create-account">
        Sign Up
    </Link>
    </span>
    {
        currentUser ? (
        <span onClick={() => auth.signOut()}>
        <Link className="logout">
        Log Out
        </Link>
        </span>
        ) : 
        (<Link to="/login" className="login">Log In</Link>)
    }

    <span>
      <Link onClick={() => history.push("/checkoutpage")}>
      <CartIcon />
      </Link>
    </span>
    </div>
    
    </div>
    </div>
    )
}

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  })

  
  export default withRouter(connect(mapStateToProps)(Header))