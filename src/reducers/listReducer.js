import {
    ADD_COLUMN,
    ADD_MARK_TO_TASK,
    ADD_PARTICIPANT_TO_TASK,
    ADD_TASK_TO_COLUMN, CHANGE_TASK_POSITION, FETCH_DATA_TO_LIST,
    SET_DATE_TO_TASK
} from "../actions/types"
import {logDOM} from "@testing-library/react";


const initialState = []


export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_TO_LIST:
            return [...action.payload]

        case ADD_COLUMN:
            return [...state, action.payload]

        case ADD_TASK_TO_COLUMN: {
            action.payload.name.date = new Date()
            return state.map(item => {
                    if (item.id === action.payload.id) {
                        const i = item.taskList
                        return {...item, taskList: [...i, action.payload.name]}
                    }
                    return item
                }
            )
        }
        case ADD_PARTICIPANT_TO_TASK: {
            let column = state.find(col => col.id === action.payload.colID)
            const tasks = column.taskList.map(task => {
                let newTask
                if(task.id === action.payload.taskID){
                    if (task.participants.includes(action.payload.partID)){
                        newTask = task.participants.filter(i => i !== action.payload.partID)
                        } else {
                        newTask = task.participants
                        newTask.push(action.payload.partID)
                    }
                    return {...task, participants: newTask }
                } else return task
            })
            column = {...column, taskList: tasks }
            const newState = state.map(col => {
                if(col.id === column.id){
                    return column
                } else return col
            })
             return newState
        }

        case ADD_MARK_TO_TASK: {
            let column = state.find(col => col.id === action.payload.colID)
            const tasks = column.taskList.map(task => {
                let newTask
                if(task.id === action.payload.taskID){
                    if (task.marks.includes(action.payload.markID)){
                        newTask = task.marks.filter(i => i !== action.payload.markID)
                    } else {
                        newTask = task.marks
                        newTask.push(action.payload.markID)
                    }
                    return {...task, marks: newTask }
                } else return task
            })
            column = {...column, taskList: tasks }
            const newState = state.map(col => {
                if(col.id === column.id){
                    return column
                } else return col
            })
            return newState
        }

        case CHANGE_TASK_POSITION: {
            const curPos = action.payload.curTaskPos.taskPosition
            const targPos = action.payload.targTaskPos.taskPosition
            const curColId = action.payload.curTaskPos.colID
            const targColId = action.payload.targTaskPos.colID
            let column = state.find(col => col.id === curColId)
            let task = column.taskList.find(task => task.taskPosition === curPos)
            task = {...task, taskPosition: targPos }
            let tasks = column.taskList.filter(task =>
                task.taskPosition !== curPos
                ).map((item, index) => {
                    return {...item, taskPosition: index}
            })
            const newS = state.map(col => {
                if(col.id === curColId){
                    return {...col, taskList: tasks}
                } else return col
            })
            let targColumn = newS.find(col => col.id === targColId)
            let t = targColumn.taskList.map(task => {
                if (task.taskPosition >= targPos) {
                    const pos = task.taskPosition
                    return {...task, taskPosition: pos+1}
                } else return task
            })
            t.push(task)
            targColumn = {...targColumn, taskList: t }

            const newState = newS.map(col => {
                if(col.id === targColId){
                    return {...col, taskList: t}
                } else return col
            })
            return newState
        }




        case SET_DATE_TO_TASK: {
            let column = state.find(col => col.id === action.payload.colID)
            const tasks = column.taskList.map(task => {
                let newTask
                if(task.id === action.payload.taskID){
                    task.date = action.payload.taskDate
                }
                return task
            })
            column = {...column, taskList: tasks }
            const newState = state.map(col => {
                if(col.id === column.id){
                    return column
                } else return col
            })
            return newState
        }


        default:
            return state
    }
}