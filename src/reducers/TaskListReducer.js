//
// const initialState = []
//
// const GET_TASKLIST = 'GET_TASKLIST'
// const EDIT_TASKLIST = 'EDIT_TASKLIST'
// const ADD_TASK_TO_COLUMN = 'ADD_TASK_TO_COLUMN'
//
// export const getTaskList = (payload) => {
//     return {type: GET_TASKLIST, payload}
// }
// export const editTaskListAction = (payload) => {
//     return {type: EDIT_TASKLIST, payload}
// }
// export const addTaskToColumnAction = (payload) => {
//     return {type: ADD_TASK_TO_COLUMN, payload}
// }
//
// export const TaskListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_TASKLIST: {
//             return [...action.payload]
//         }
//         case EDIT_TASKLIST: {
//             const newState = state.map(ts => {
//                 if(ts.id === action.payload.id){
//                     return {...action.payload}
//                 } else return ts
//             })
//             return newState
//         }
//
//         case ADD_TASK_TO_COLUMN: {
//             return [...state, action.payload]
//         }
//
//         default:
//             return state
//     }
// }
