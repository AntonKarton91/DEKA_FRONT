import axios from "axios";
import {loginUserAction, refreshTokenAction} from "../actionCreaters";
import jwt_decode from "jwt-decode";


export const loginUser = (userData) => {
    return function (dispatch){
        axios.post("http://127.0.0.1:8000/api/token/", {
            email: userData.email?.value || userData.email,
            password: userData.password?.value || userData.password,
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('accessToken', response.data.access)
                    localStorage.setItem('refreshToken', response.data.refresh)
                    localStorage.setItem('userID', jwt_decode((response.data).access).user_id)
                    return dispatch(loginUserAction(response.data))
                }

            })
            .catch(error => console.log(error))

    }
}

export const updateToken = (refresh) => {
    const r = {refresh: refresh}
    console.log('to', r)
    return function (dispatch){
        axios.post("http://127.0.0.1:8000/api/token/refresh/", {
            refresh: refresh
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('accessToken', response.data.access)
                    localStorage.setItem('refreshToken', response.data.refresh)
                    return dispatch(refreshTokenAction(response.data))
                }

            })
            .catch(error => console.log(error))

    }
}