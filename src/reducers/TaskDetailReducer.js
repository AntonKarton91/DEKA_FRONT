const initialState = {}

const GET_TASK_DETAIL = 'GET_TASK_DETAIL'
const DETAIL_EDIT = 'DETAIL_EDIT'

export const getTaskDetailAction = (payload) => {
    return {type: GET_TASK_DETAIL, payload}
}
export const taskDetailEditAction = (payload) => {
    return {type: DETAIL_EDIT, payload}
}


export const TaskDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASK_DETAIL: {
            return {...action.payload}
        }
        case DETAIL_EDIT: {
            return {...action.payload}
        }

        default:
            return state
    }
}
