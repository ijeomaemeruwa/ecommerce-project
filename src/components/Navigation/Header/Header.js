import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom'
//import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { UserMenu } from '../UserMenu/UserMenu'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { auth, createUserProfile } from '../../../firebase/firebase.utils'

export class Header extends React.Component {
    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
            const userRef = await createUserProfile(userAuth)

            userRef.onSnapshot(snapShot => {
            this.setState({
            currentUser: {
                id: snapShot.id,
                ...snapShot.data()
            }
            });
            });   
        } else {
            this.setState({ currentUser: userAuth })
        }
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
    <span><UserMenu currentUser={this.state.currentUser} /></span>
    <span><LocalMallOutlinedIcon /></span>
    </div>

    </div>       
    </div>
    )
}
}