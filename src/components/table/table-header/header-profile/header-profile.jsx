import React from 'react';
import profileImage from '../../../../static/images/ava_1.png'
import './header-profile.css'
const HeaderProfile = () => {
    return (
        <div>
            <img className='image' src={profileImage} alt=""/>
        </div>
    );
};

export default HeaderProfile;