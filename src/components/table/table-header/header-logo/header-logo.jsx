import React from 'react';

import './header_logo.css'
import logoImage from '../../../../static/images/logo.ico'

const HeaderLogo = () => {
    return (
            <img className='header_logo' src={logoImage} alt=""/>
    );
};

export default HeaderLogo;