import React from 'react';
import css from './css/header.css'
import logo from './assets/logo.png'

const Header = () => {
    return(
<div className="col-12 d-flex justify-content-center">
<div className>
    <img className="custom-logo" src={logo}></img>
</div>
</div>
    );
}

export default Header;