import React, {useState} from 'react';
import './login-form-container.css'
import FormContent from "../form-content/formContent";
import {registerFormItems, loginFormItems}  from './constants'
import Button from "./buttons/button";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


function RegLogForm(){
    const user = useSelector(state => state.Auth)
    let [formType, setForm] = useState('reg')


    function showRegForm (event){
        setForm(formType = 'reg')
    }

    function showLogForm (event){
        setForm(formType = 'log')
    }

    function ShowForm(){
        if (formType === 'reg'){
            return (
                <FormContent  data={registerFormItems}/>
            )
        } else {
            return (
                <FormContent  data={loginFormItems}/>
            )
        }
    }


    return(
            <div className='form-container'>
                <div className='buttons'>
                    <Button onClick={showRegForm}>РЕГИСТРАЦИЯ</Button>
                    <Button onClick={showLogForm}>АВТОРИЗАЦИЯ</Button>
                </div>
                <ShowForm />
                {user.user
                    ?
                    user.user.user_id
                    :
                    null}
            </div>
    )

}
export default RegLogForm