import React, {useEffect} from 'react';
import RegisterFormComponent from "./RegisterForm.Component";
import InputComponent from "./Input.Component";
import {useForm} from "react-hook-form";
import {Stack, Typography} from "@mui/material";
import RegisterButtonComponent from "./RegisterButton.Component";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
// import axios from "axios";
import {fetchUsersListAction, refreshTokenAction} from "../../actions/actionCreaters";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../actions/asyncActions/AuthFetch";
import {useNavigate} from "react-router-dom";

const schema = yup.object().shape({
    first_name: yup.string().matches(/^([^0-9]*)$/, 'Содержит только буквы').required('Обязательное поле'),
    last_name: yup.string().matches(/^([^0-9]*)$/, 'Содержит только буквы').required('Обязательное поле'),
    email: yup.string().email('Формат записи неверен').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),

});

const RegisterPage = () => {
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
        const entries = Object.entries(data).filter((entry) => entry[0] !== "photo");
        let formData = new FormData()

        formData.append('ava', data.photo[0], data.photo[0].name)

        entries.forEach(entry => {
            formData.append(entry[0], entry[1]);
        })

        const response = await axios({
            method: 'post',
            url: "http://127.0.0.1:8000/api/v1/register/",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
            .then(response => {
                if (response.status === 200) {
                    response.data.password = data.password
                    dispatch(loginUser(response.data))

                }
            })
            .catch(error => console.log(error))
    }

    return (
        <RegisterFormComponent onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
                <Stack direction='column' spacing={2}>
                    <InputComponent {...register('first_name')}
                                    id='first_name'
                                    type='text'
                                    label='Имя'
                                    error={!!errors.first_name}
                                    helperText={errors?.first_name?.message}
                        />
                    <InputComponent {...register('last_name')}
                                    id='last_name'
                                    type='text'
                                    label='Фамилия'
                                    error={!!errors.last_name}
                                    helperText={errors?.last_name?.message}/>
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
                    <InputComponent {...register('photo')}
                                    name='photo'
                                    id='photo'
                                    type='file'
                                    label='Фотография'
                                    accept='image/*'
                        />

                    <RegisterButtonComponent>Регистрация</RegisterButtonComponent>
                </Stack>
            </Stack>
        </RegisterFormComponent>
    );
};

export default RegisterPage;