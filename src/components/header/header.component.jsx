import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';

import './header.style.scss';

const Header=({currentUser})=>(
<div className="header">
    <Link className="logo-container" to="/">
        <Logo className="logo"/>
    </Link>
    <div className="options">
        <Link to="/shop" className="option"> SHOP</Link>
        <Link to="/contact" className="option"> Contact</Link>
        {
            currentUser ?
            <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
             <Link to="/SignIn" className="option"> SIGN IN</Link>
        }
       
       
    </div>
</div>
);

export default Header;

