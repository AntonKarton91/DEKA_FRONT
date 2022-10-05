import React, {useState} from 'react';
import './login-root-styles.css'
import RegLogForm from "../login-form-container";
import {Navigate, useNavigate} from "react-router-dom";


function LoginRootComponent(props) {

    if(localStorage.getItem('authTokens'))  return <Navigate to='/' />;

    return (
            <div className='main-field'>
                <RegLogForm />
            </div>
    )
}

export default LoginRootComponent