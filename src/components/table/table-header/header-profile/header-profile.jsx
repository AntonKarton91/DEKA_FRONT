import React, {useEffect, useState} from 'react';

import './header-profile.css'
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import {getUser} from "../../../../Hooks/useGetUser";
import {Link} from "react-router-dom";



const HeaderProfile = () => {
    const [user] = useState(localStorage.getItem('userID'))
    const userData = useSelector(state => state.users)
    const a = getUser(user, userData)
    const avaStyles = {width: '30px', height: '30px', margin: '0 5px 0 10px'}
    return (

        <div>
            <Link to={`/profile/${user}`}>
            <Avatar sx={avaStyles} alt="Remy Sharp" src={a?.ava || 'fff'} />
            </Link>
        </div>
    );
};

export default HeaderProfile;