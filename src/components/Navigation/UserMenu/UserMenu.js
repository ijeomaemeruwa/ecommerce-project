import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from '../../../firebase/firebase.utils';


const UserMenu = ({ currentUser }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  
  return (
    <div>
      <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <PersonOutlineRoundedIcon />
      </div>
      <Menu className="user_menu"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/useraccountpage">
          <MenuItem onClick={handleClose} className="signup">
            Join Oatts
          </MenuItem>
        </Link>

        {
          currentUser ? (
            <div onClick={() => auth.signOut()}>
              <Link className="logout">
                Log Out
              </Link>
            </div>
          ) : (
            <Link to="/useraccountpage">
             <MenuItem onClick={handleClose} className="login">
               Log In
             </MenuItem>
            </Link>
          )
        }

        <Link to="/myorders">
        <MenuItem onClick={handleClose} className="orders">
          My Orders
        </MenuItem> 
        </Link>

      </Menu>
    </div>
  );
}       

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserMenu);