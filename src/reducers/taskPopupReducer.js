import {
    ADD_PART_TO_POPUP,
    SHOW_PART_ADD_FORM,
    TASK_POPUP_ACTIVATION,
    TASK_POPUP_DATA_ADD
} from "../actions/types"

const initialState = {
    isActive: false,
    title: '',
    participants: [],
    showPartAddForm: false,
    columnID: '',
    taskID: ''
}

export const taskPopupReducer = (state=initialState, action) => {
    switch (action.type){
        case TASK_POPUP_ACTIVATION: {
            return {...state, isActive: action.payload.isActive, showPartAddForm: false, columnID: action.payload.columnID, taskID: action.payload.taskID}
        }
        case TASK_POPUP_DATA_ADD: {
            return {...state,
                title: action.payload.name, 
                participants: action.payload.participants
            }
        }
        case SHOW_PART_ADD_FORM: {
            console.log(state.participants, 'initial parts')
            return {...state, 
                showPartAddForm: !state.showPartAddForm
            }
        }
        case ADD_PART_TO_POPUP: {
            return {...state,
                participants: action.payload
            }
        }

        default:
            return state
    }
}