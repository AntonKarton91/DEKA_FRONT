import React, {useEffect, useState} from 'react';
import './login-root-styles.css'
import RegLogForm from "../login-form-container";
import {Navigate, useNavigate} from "react-router-dom";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {Stack} from "@mui/material";
import InputComponent from "../../RegisterPage/Input.Component";
import RegisterButtonComponent from "../../RegisterPage/RegisterButton.Component";
import RegisterFormComponent from "../../RegisterPage/RegisterForm.Component";
import axios from "axios";
import {loginUser} from "../../../actions/asyncActions/AuthFetch";
import {useDispatch, useSelector} from "react-redux";

const schema = yup.object().shape({
    email: yup.string().email('Формат записи неверен').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
});

function LoginRootComponent(props) {
    const dispatch = useDispatch()
    const isAuth = localStorage.getItem('accessToken')
    const nav = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (isAuth) return nav('/') ;
    }, [isAuth])

    const onSubmit = async (data) => {
        dispatch(loginUser(data))
    }


    if(localStorage.getItem('authTokens'))  return <Navigate to='/' />;


    return (
        <RegisterFormComponent onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
                <Stack direction='column' spacing={2}>
                    <InputComponent {...register('email')}
                                    id='email'
                                    type='email'
                                    label='Email'
                                    error={!!errors.email}
                                    helperText={errors?.email?.message}/>
                    <InputComponent {...register('password')}
                                    id='password'
                                    type='password'
                                    label='Пароль'
                                    error={!!errors.password}
                                    helperText={errors?.password?.message}/>
                    <RegisterButtonComponent>Авторизация</RegisterButtonComponent>
                </Stack>
            </Stack>
        </RegisterFormComponent>
    )
}

export default LoginRootComponent


