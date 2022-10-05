import {FETCH_USERS_LIST} from "../actions/types";

const initialState = [
        // {name: 'Антон', id: 1, url: "images/avatars/a1.png"},
        // {name: 'Михаил', id: 2, url: "images/avatars/a2.png"},
        // {name: 'Дмитрий', id: 3, url: "images/avatars/cat.jpg"},
        // {name: 'Полина', id: 4, url: "images/avatars/frog.jpg"},
        // {name: 'Ибрагим', id: 5, url: "images/avatars/PU.jpg"},
        // {name: 'Кирил', id: 6, url: "images/avatars/V.jpg"},
    ]

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_LIST:
            return [...action.payload]

        default:
            return state
    }
}