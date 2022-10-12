import {
    ADD_PART_TO_POPUP, SHOW_DATE_FORM, SHOW_MARK_ADD_FORM,
    SHOW_PART_ADD_FORM,
    TASK_POPUP_ACTIVATION, TASK_POPUP_COMMENT_ADD,
    TASK_POPUP_DATA_ADD, TASK_POPUP_DATE_CHANGE
} from "../actions/types"

const initialState = {
    taskDate: '',
    isActive: false,
    title: '',
    participants: [],
    showPartAddForm: false,
    showMarkAddForm: false,
    showCalendar: false,
    columnID: '',
    taskID: '',
    description: '',
    marks: [],
    comments: []
}

export const taskPopupReducer = (state=initialState, action) => {
    switch (action.type){
        case TASK_POPUP_ACTIVATION: {
            return {...state,
                isActive: action.payload.isActive,
                showPartAddForm: false,
                showMarkAddForm: false,
                columnID: action.payload.columnID,
                taskID: action.payload.taskID,
                }
        }
        case TASK_POPUP_DATA_ADD: {
            return {...state,
                title: action.payload.name,
                taskDate: action.payload.date,
                participants: action.payload.participants,
                description: action.payload.taskDescription,
                comments: action.payload.comments,

            }
        }

        case TASK_POPUP_COMMENT_ADD: {
            return {...state,
                comments: [...state.comments, action.payload],

            }
        }
        case SHOW_PART_ADD_FORM: {
            return {...state, 
                showPartAddForm: !state.showPartAddForm
            }
        }

        case SHOW_MARK_ADD_FORM: {
            return {...state,
                showMarkAddForm: !state.showMarkAddForm
            }
        }

        case SHOW_DATE_FORM: {
            return {...state,
                showCalendar: !state.showCalendar
            }
        }

        case TASK_POPUP_DATE_CHANGE: {
            return {...state,
                taskDate: action.payload.date,
            }
        }

        default:
            return state
    }
}