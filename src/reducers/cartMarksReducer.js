import {FETCH_MARK_LIST} from "../actions/types";

const initialState = [
    // {id:1, title: 'ВАЖНО!', color: '#c377e0'},
    // {id:2, title: 'Выдано в работу', color: '#00c2e0'},
    // {id:3, title: 'Дизайн', color: '#0079bf'},
    // {id:4, title: 'Недооформленная задача', color: '#eb5a46'},
]

export const cartMarksReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_MARK_LIST:
            return [...action.payload]
        default:
            return state
    }
}

