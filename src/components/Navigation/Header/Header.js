import React from 'react'
import { connect } from 'react-redux'
import '../Header/Header.css'
import { Link } from 'react-router-dom'
import UserMenu from '../UserMenu/UserMenu'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { auth, createUserProfile } from '../../../firebase/firebase.utils'
import { setCurrentUser } from '../../../redux/actions/user.action'


class Header extends React.Component {
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
    <div className="header">
    <div className="header_section sticky-top">

    <div className="row header_links">
    <span>Search</span>
    <span><Link to="/shoppage" className="shop">Shop</Link></span>
    </div>

    <h2><Link to="/" className="logo">OATTS</Link></h2>

    <div className="header_features row">
    <span><UserMenu /></span>
    <span><LocalMallOutlinedIcon /></span>
    </div>

    </div>       
    </div>
    )
}
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })
  
  export default connect(null, mapDispatchToProps)(Header)