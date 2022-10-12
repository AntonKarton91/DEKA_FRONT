import {LOGIN_USER, REFRESH_TOKEN} from "../actions/types";
import jwt_decode from  "jwt-decode";
let initialState = {}
if (localStorage.getItem('authTokens')) {
    initialState = {
        isAuthenticated: true,
        user: jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access).user_id,
        authToken: JSON.parse(localStorage.getItem('authTokens')),
        userData: null
    }
} else {
    initialState = {
        isAuthenticated: false,
        user: null,
        authToken: null,
        userData: null
    }
}

const AuthReducer = (state=initialState, action) => {
    switch (action.type){

        case LOGIN_USER: {
            const user = jwt_decode(action.payload.access)
            const authToken = action.payload
            return {...state, isAuthenticated: true, user: user, authToken: authToken}
            return state
        }


        case REFRESH_TOKEN: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export default AuthReducer