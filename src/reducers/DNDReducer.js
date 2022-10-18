const SET_CART = 'SET_CART'
const SET_CART1 = 'SET_CART1'

export const setCartAction = (payload) => {
    return {type: SET_CART, payload}
}
export const setCartAction1 = (payload) => {
    return {type: SET_CART1, payload}
}


const initialState ={}


export const DNDReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CART1:
            console.log(action.payload)
            return action.payload




        default:
            return state
    }
}