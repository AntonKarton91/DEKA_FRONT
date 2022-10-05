import {
    addColumnAction,
    addTaskToColumnAction,
    fetchDataToListAction,
    fetchMarksListAction, putNewCommentAction,
    taskPopupDataAddAction
} from "../actionCreaters";
import axios from "axios";

export const fetchList = () => {
    return function (dispatch){
        fetch("http://127.0.0.1:8000/api/v1/columnlist/")
            .then(response => response.json())
            .then(json => {
                dispatch(fetchDataToListAction(json))
            })
            .catch(error => console.log(error))
    }
}


export const postNewColumn = (columnData) => {
    return function (dispatch){
        axios.post("http://127.0.0.1:8000/api/v1/columnlist/", {
            columnName: columnData.columnName,
            columnType: "WORK",
        })
            .then(response => {
                return dispatch(addColumnAction(columnData))})
            .catch(error => console.log(error))

    }
}

export const putNewTask = (taskData) => {
    return function (dispatch){
        axios.post(`http://127.0.0.1:8000/api/v1/tasklist/`, {
            name: taskData.name.name,
            taskDescription: '',
            column: taskData.id,
            taskPosition: taskData.name.taskPosition,
        })
            .then(response => {
                return dispatch(addTaskToColumnAction(taskData))})
            .catch(error => console.log(error))

    }
}


export const taskDetail = (taskData) => {
    return function (dispatch){
        axios.get(`http://127.0.0.1:8000/api/v1/task/${taskData.id}`)
            .then(response => {
                return dispatch(taskPopupDataAddAction(response.data))})
            .catch(error => console.log(error))

    }
}

export const putNewComment = (commentData) => {
    console.log(commentData.task)
    return function (dispatch){
        axios.post(`http://127.0.0.1:8000/api/v1/comment/`, {
            task: commentData.task,
            creater: 1,
            body: commentData.commentText,
        })
            .then(response => {
                return dispatch(putNewCommentAction(response.data))})
            .catch(error => console.log(error))

    }
}