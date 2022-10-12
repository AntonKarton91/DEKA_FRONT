import React, {useEffect, useState} from 'react';
import HeaderMenuItem from "./header_menu-item/header_menu-item";
import './header_nav-menu.css'
import {useSelector} from "react-redux";


const HeaderNavMenu = () => {
    const isAuth = localStorage.getItem('accessToken')
    const [linkList, setLinkList] = useState([
                                                {name: 'Авторизация', link: '/login'},
    ])


    useEffect(() => {
        if(isAuth){
            setLinkList([
                {name: 'Рабочие пространства', link: '/'},
                {name: 'Недавние', link: '/'},
                {name: 'В избранном', link: '/'},
            ])
        } else {
            setLinkList([
                {name: 'Авторизация', link: '/login'},
                {name: 'Регистрация', link: '/register'},
            ])
        }
    }, [isAuth])


    const Menu = () => {
        return (
            linkList.map((item, index) => {
                return <HeaderMenuItem key={item.name} date={item}>{item.name}</HeaderMenuItem>
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