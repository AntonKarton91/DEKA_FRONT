import React from 'react';

import './table-header.css'
import HeaderLogo from "./header-logo/header-logo";
import HeaderNavMenu from "./header_nav-menu/header_nav-menu";
import HeaderSearch from "./header-search/header-serach";
import HeaderProfile from "./header-profile/header-profile";

const TableHeader = () => {
    return (
        <div className={'header-container'}>
            <HeaderLogo />
            <HeaderNavMenu />
            <div className={'profile-container'}>
                <HeaderSearch />
                <HeaderProfile />
            </div>
        </div>
    );
};

export default TableHeader;