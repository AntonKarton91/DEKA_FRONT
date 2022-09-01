import {ADD_COLUMN, ADD_PARTICIPANT_TO_TASK, ADD_TASK_TO_COLUMN} from "../actions/types"

const initialState = [
    {
        columnName: 'Задачи в очереди',
        id: 0,
        taskList: [
            {
                id: 1,
                name: 'Лореаль, образец, маск Бар на полку, 119МК-7 (СФ)',
                participants: [1, 2],
                marks: [1, 2, 3, 4]
            },
            {id: 2, name: 'L\'Oreal, ВИЗИ ПЭКи, образцы, №35 ЮЛ', participants: [1], marks: [1, 3]},
            {id: 3, name: 'Инситех, 78 подложек, №34 ЮЛ', participants: [2], marks: [1]}
        ]
    },
    {
        columnName: 'Задачи в Антона',
        id: 1,
        taskList: [
            {id: 1, name: 'Лореаль, образец, маск Бар на полку, 119МК-7 (СФ)', participants: [1], marks: [2]},
        ]
    },
]

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN:
            return [...state, action.payload]
        case ADD_TASK_TO_COLUMN: {
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

        default:
            return state
    }
}