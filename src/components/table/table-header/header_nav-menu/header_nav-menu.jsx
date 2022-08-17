import React, {useState} from 'react';
import HeaderMenuItem from "./header_menu-item/header_menu-item";

import './header_nav-menu.css'
const HeaderNavMenu = () => {

    const [menu, setMenu] = useState([
        {name: 'Рабочие пространства'},
        {name: 'Недавние'},
        {name: 'В избранном'},
        {name: 'Шаблоны'},
    ])

    const Menu = () => {
        return (
            menu.map((item, index) => {
                return <HeaderMenuItem key={item.name}>{item.name}</HeaderMenuItem>
            })
        )
    }

    return (
        <div className='header_nav-container'>
            <Menu />
        </div>
    );
};

export default HeaderNavMenu;