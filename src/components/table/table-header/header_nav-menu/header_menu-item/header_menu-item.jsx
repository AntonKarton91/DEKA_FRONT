import React from 'react';
import './header-menu-item.css'


const HeaderMenuItem = ({children}) => {
    return (
        <div className='header_menu-item'  >
            {children}
        </div>
    );
};

export default HeaderMenuItem;