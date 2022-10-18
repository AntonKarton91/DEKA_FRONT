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


export const ColumnReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST: {
            const columns = action.payload.columns
            const newColumns = columns.map(col => {
                    col.order  = JSON.parse(col.order)
                return {...col, order: col.order}
            })

            return {taskList: action.payload.tasks , columnList: newColumns}
        }
        case ADD_COLUMN: {
            return {...state, columnList: [...state.columnList, action.payload]}
        }
        case ADD_TASK_TO_COLUMN: {
            const task = action.payload.task
            console.log(action.payload.order)
            console.log(JSON.parse(action.payload.order))

            const order = JSON.parse(action.payload.order)

            const newColList = state.columnList.map(col => {
                if (task.column === col.id) {
                    return {...col, order: order}
                } else return col
            })
            return {columnList: newColList, taskList: [...state.taskList, task]}

        }

        case DND: {

            // {
            //     cart: targetCart,
            //
            //         colFrom: {
            //     id: targetCart.column,
            //         orderColFrom
            // },
            //     colTo: {
            //         id: prevCart.column,
            //             orderColTo
            //     }
            // }
            const {cart, colFrom,  colTo} = action.payload
            // console.log(colFrom.orderColFrom)
            // console.log(colTo.orderColTo)
            const newTaskList = state.taskList.map(task => {
                if (task.id === cart.id){
                    // console.log(colTo)
                    return {...task, column: cart.column}
                } else return task
            })
            const newColList = state.columnList.map(col => {
                if (col.id === colFrom.id){
                    return {...col, order: colTo.orderColTo}
                } else if (col.id === colTo.id){
                    return {...col, order: colFrom.orderColFrom}
                } else return col})
            return {columnList: newColList, taskList: newTaskList}
        }












        default:
            return state
    }
}
