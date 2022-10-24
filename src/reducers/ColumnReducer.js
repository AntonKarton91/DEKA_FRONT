const initialState = {
    columnList: [],
    taskList: []
}

const GET_LIST = 'GET_LIST'
const ADD_COLUMN = 'ADD_COLUMN'
const DEL_CART = 'DEL_CART'
const EDIT_TASKLIST = 'EDIT_TASKLIST'
const ADD_TASK_TO_COLUMN = 'ADD_TASK_TO_COLUMN'
const DND = 'DND'

export const fetchDataToListAction = (payload) => {
    return {type: GET_LIST, payload}
}
export const addTaskToColumnAction = (payload) => {
    return {type: ADD_TASK_TO_COLUMN, payload}
}
export const addNewColumnAction = (payload) => {
    return {type: ADD_COLUMN, payload}
}

export const dnd = (payload) => {
    return {type: DND, payload}
}
export const editTaskListAction = (payload) => {
    return {type: EDIT_TASKLIST, payload}
}


export const ColumnReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST: {
            const columns = action.payload.columns
            const newColumns = columns.map(col => {
                if (!col.order){
                    return {...col, order: []}
                } else return col
            })

            return {taskList: action.payload.tasks , columnList: newColumns}
        }
        case ADD_COLUMN: {
            return {...state, columnList: [...state.columnList, action.payload]}
        }
        case ADD_TASK_TO_COLUMN: {
            const task = action.payload.task
            const newColList = state.columnList.map(col => {
                if (task.column === col.id) {
                    return {...col, order: action.payload.order}
                } else return col
            })
            return {columnList: newColList, taskList: [...state.taskList, task]}

        }

        case DND: {
            const newTaskList = [...state.taskList]
            newTaskList.forEach(item => {
                if  (item.id === action.payload.cart.id){
                    item.column = action.payload.colTo.id
                }
            })
            return {columnList: action.payload.list, taskList: newTaskList}
        }

        case EDIT_TASKLIST: {
            const newTaskList = [...state.taskList]
            newTaskList.forEach(item => {
                if  (item.id === action.payload.id){
                    item.participants = action.payload.participants
                    item.marks = action.payload.marks
                    item.date = action.payload.date
                }
            })
            return {columnList: state.columnList, taskList: newTaskList}
        }


        //     const newState = state.map(ts => {
        //         if(ts.id === action.payload.id){
        //             return {...action.payload}
        //         } else return ts
        //     })
        //     return newState
        // }













        default:
            return state
    }
}
