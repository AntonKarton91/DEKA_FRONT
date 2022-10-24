
import axios from "axios";
import {getTaskDetailAction, putNewCommentAction,} from "../../reducers/TaskDetailReducer";
import {addNewColumnAction, addTaskToColumnAction, fetchDataToListAction} from "../../reducers/ColumnReducer";

export const fetchList = () => {
    return function (dispatch){
        fetch("http://127.0.0.1:8000/api/v1/list/")
            .then(response => response.json())
            .then(json => {
                dispatch(fetchDataToListAction(json))
            })
            .catch(error => console.log(error))
    }
}
export const postNewColumn = (columnData) => {
    return function (dispatch){
        axios.post("http://127.0.0.1:8000/api/v1/addcolumn/", {
            ...columnData
        })
            .then(response => {
                console.log(response.data)
                return dispatch(addNewColumnAction(response.data))
            })
            .catch(error => console.log(error))

    }
}

export const putNewTask = (taskData) => {
    return function (dispatch){
        axios.post(`http://127.0.0.1:8000/api/v1/addtask/`, {
            name: taskData.name,
            taskDescription: '',
            column: taskData.id,
            date: taskData.date
        })
            .then(response => {

                return dispatch(addTaskToColumnAction(response.data))
            })
            .catch(error => console.log(error))

    }
}
export const dndList = (taskData) => {
    return function (dispatch){
        axios.post(`http://127.0.0.1:8000/api/v1/dnd/`, {
            ...taskData
        })
            .then(response => {

            })
            .catch(error => console.log(error))

    }
}














export const taskDetail = (taskData) => {
    return function (dispatch){
        axios.get(`http://127.0.0.1:8000/api/v1/task/${taskData.id}`)
            .then(response => {
                // return dispatch(taskPopupDataAddAction(response.data))
                })
            .catch(error => console.log(error))

    }
}




export const putNewComment = (commentData) => {
    return function (dispatch){
        axios.post(`http://127.0.0.1:8000/api/v1/comment/`, {
            task: commentData.task,
            creater: commentData.creater,
            body: commentData.commentText,
        })
            .then(response => {
                return dispatch(putNewCommentAction(response.data))
                })
            .catch(error => console.log(error))

    }
}




export const fetchTaskList = () => {
    return function (dispatch){
        axios.get("http://127.0.0.1:8000/api/v1/task/")
            .then(response => {
                // return dispatch(getTaskList(response.data))
                })
            .catch(error => console.log(error))
    }
}














export const fetchTaskDetail = (taskID) => {
    return function (dispatch){
        axios.get(`http://127.0.0.1:8000/api/v1/taskdetail/${taskID}`)
            .then(response => {
                return dispatch(getTaskDetailAction(response.data))
            })
            .catch(error => console.log(error))
    }
}


export const taskDetailEdit = (taskData) => {
    console.log(taskData)
    return function (dispatch){
        axios.put(`http://127.0.0.1:8000/api/v1/taskdetail/${taskData.id}/`, {
            ...taskData
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))

    }
}
