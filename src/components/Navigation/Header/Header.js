import React from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { UserMenu } from '../UserMenu/UserMenu'

import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

export const Header = () => {
    return (
    <div className="header">
    <div className="header_section">

    <div><SearchRoundedIcon /></div>

    <h2><Link to="/" className="logo">OATTS</Link></h2>

    <div className="header_features">
    <span><UserMenu /></span>
    <span><LocalMallOutlinedIcon /></span>
    </div>

    </div>       
    </div>
    )
}
