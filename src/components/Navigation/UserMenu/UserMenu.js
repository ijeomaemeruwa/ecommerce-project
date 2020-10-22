import React from 'react'
import { Link } from 'react-router-dom'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from '../../../firebase/firebase.utils';


export const UserMenu = ({ currentUser }) => {
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
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/createaccount">
          <MenuItem onClick={handleClose}>Join Oatts</MenuItem>
        </Link>
        {
          currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              LOG OUT
            </div>
          ) : (
            <Link className="option" to="/login">
             <MenuItem onClick={handleClose}>Log In</MenuItem>
            </Link>
          )
        }
        <MenuItem onClick={handleClose}>My Orders</MenuItem> 
      </Menu>
    </div>
  );
}       

