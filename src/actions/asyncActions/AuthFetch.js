import axios from "axios";
import {loginUserAction, refreshTokenAction} from "../actionCreaters";


export const loginUser = (userData) => {

    return function (dispatch){
        axios.post("http://127.0.0.1:8000/api/token/", {
            username: userData.email.value,
            password: userData.password.value,
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('authTokens', JSON.stringify(response.data))
                    return dispatch(loginUserAction(response.data))
                }

            })
            .catch(error => console.log(error))

    }
}

export const updateToken = (refresh) => {
    console.log(refresh)
    return function (dispatch){
        axios.post("http://127.0.0.1:8000/api/token/refresh/", {
            refresh: refresh
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    localStorage.setItem('authTokens', JSON.stringify(response.data))

                    return dispatch(refreshTokenAction(response.data))
                }

            })
            .catch(error => console.log(error))

    }
}