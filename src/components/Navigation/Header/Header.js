import React from 'react'
import '../Header/Header.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

export const Header = () => {
    return (
    <div className="header">
    <div className="header_section">

    <div><SearchRoundedIcon /></div>

    <h2><a href="/" className="logo">OATS</a></h2>

    <div className="header_features">
    <span><PersonOutlineRoundedIcon /></span>
    <span><FavoriteBorderRoundedIcon /></span>
    <span><LocalMallOutlinedIcon /></span>
    </div>

    </div>       
    </div>
    )
}
