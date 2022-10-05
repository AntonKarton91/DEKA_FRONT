import React from 'react';
import './header-menu-item.css'
import { Link } from 'react-router-dom'


const HeaderMenuItem = ({children, date}) => {
    return (
        <Link to={date.link} className='header_menu-item'  >
            {children}
        </Link>
    );
};

export default HeaderMenuItem;