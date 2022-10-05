import {CHANGE_MONTH, CHANGE_TASK_DATE} from "../actions/types";

const initial_state = {
    initialDate: new Date(),
    selectedDate: new Date()
}


export function calendarReducer (state=initial_state, action) {
    switch (action.type){
        case CHANGE_TASK_DATE:{
            return {...state, selectedDate: action.payload}
        }
        case CHANGE_MONTH:{
            return {...state,
                initialDate: new Date(state.initialDate.getFullYear(),
                    state.initialDate.getMonth()+action.payload)}
        }
        default:
            return state
    }
}

