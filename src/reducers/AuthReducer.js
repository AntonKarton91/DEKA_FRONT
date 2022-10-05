import {LOGIN_USER, REFRESH_TOKEN} from "../actions/types";
import jwt_decode from  "jwt-decode";

const initialState = {
    isAuthenticated: null,
    user: null,
    authToken: localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null,
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

        }
        default:
            return state
    }
}

export default AuthReducer