import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils';

import { Link } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown';



const UserMenu = ({ currentUser }) => {
      
  return (
    <div>
      <Dropdown className="user_menu">

      <Dropdown.Toggle className="toggle" id="dropdown-basic">
       <BsPerson />
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item>
        <Link to="/createaccount" className="signup">Join Oatts</Link> 
      </Dropdown.Item>

       <Dropdown.Item>
       {
          currentUser ? (
            <div onClick={() => auth.signOut()}>
              <Link className="logout">
                Log Out
              </Link>
            </div>
          ) : (
            <Link to="/login" className="login">Log In</Link>
          )
        }
       </Dropdown.Item>
       <Dropdown.Item>
       <Link to="/myorders" className="orders"> My Orders</Link>
       </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown> 

    </div>
  );
}       
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserMenu);