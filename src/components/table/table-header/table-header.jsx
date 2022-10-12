import React from 'react';

import './table-header.css'
import HeaderLogo from "./header-logo/header-logo";
import HeaderNavMenu from "./header_nav-menu/header_nav-menu";
import HeaderSearch from "./header-search/header-serach";
import HeaderProfile from "./header-profile/header-profile";
import {useSelector} from "react-redux";

const TableHeader = () => {
    const isAuth = localStorage.getItem('accessToken')
    return (
        <div className={'header-container'}>
            <HeaderLogo />
            <HeaderNavMenu />
            {isAuth ? (
                <div className={'profile-container'}>
                    <HeaderSearch/>
                    <HeaderProfile/>
                </div>
            ) : null
            }

        </div>
    );
};

export default TableHeader;