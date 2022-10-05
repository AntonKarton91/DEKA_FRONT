import {RESET_CART, SET_CART} from "../actions/types";


const initialState = {currentCart: null, targetCart: null}
export const DNDReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {...state, ...action.payload}
        case RESET_CART:
            return initialState



        default:
            return state
    }
}