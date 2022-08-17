import React, {useState} from 'react';
import './login-root-styles.css'
import RegLogForm from "../login-form-container";

function LoginRootComponent() {
    return (
        <>
            <div className='main-field'>
                <RegLogForm />
            </div>
        </>
    )
}

export default LoginRootComponent