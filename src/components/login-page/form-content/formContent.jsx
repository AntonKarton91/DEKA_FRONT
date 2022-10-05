import React, {useEffect, useState} from 'react';
import './form-content.css'
import Button from "../login-form-container/buttons/button";
import {loginUser} from "../../../actions/asyncActions/AuthFetch";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";

const FormContent = ({data}) => {
    const dispatch = useDispatch()
    const [formData, setData] = useState(data)
    const isAuth = useSelector(state => state.Auth.isAuthenticated)
    const nav = useNavigate()

    useEffect(() => {
        if (isAuth) return nav('/') ;
    }, [isAuth])




    function login(e) {
        e.preventDefault()
        dispatch(loginUser(e.target))

    }

    return (
        <form className='form-content'
        onSubmit={(e) => login(e)}>
            <input className='form-input'
                   name='first_name'
                   type="text"
                   placeholder='Имя'
                   required
            />
            <input className='form-input'
                   name='last_name'
                   type="text"
                   placeholder='Фамилия'
                   required
            />
            <input className='form-input'
                   name='email'
                   type="email"
                   placeholder='email'
                   required
            />
            <input className='form-input'
                   name='password'
                   type="password"
                   placeholder='Пароль'
                   required
            />
            <Button >{formData.submit}</Button>
        </form>
    );
};

export default FormContent;