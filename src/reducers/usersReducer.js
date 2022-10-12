import {FETCH_USERS_LIST} from "../actions/types";

const initialState = []

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_LIST:
            return [...action.payload]


        default:
            return state
    }
}