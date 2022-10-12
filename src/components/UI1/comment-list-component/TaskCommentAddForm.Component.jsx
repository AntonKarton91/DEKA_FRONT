import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from "./task_comments.module.css";
import {putNewComment} from "../../../actions/asyncActions/listData";
import {getUser} from "../../../Hooks/useGetUser";

const TaskCommentAddFormComponent = () => {
    const [userFromStorage] = useState(localStorage.getItem('userID'))
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const user = getUser(userFromStorage, users)
    const [commentText, setCommentText] = useState('')
    const taskData = useSelector(state => state.task)

    function clickHandler(){
        if (commentText){
            dispatch(putNewComment({
                commentText,
                creater: userFromStorage,
                task: taskData.taskID
            }))
        }
        setCommentText((''))
    }

    return (

        <div className={classes.addFormContainer}>
            <img className={classes.image} src={user.ava} alt=""/>
            <div className={classes.forma}>
            <textarea className={classes.commentInput}
                      type="text"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder={'Напишите комментарий...'}/>
                <div className={classes.saveButton}
                     onClick={e => clickHandler(e)}>
                    Сохранить</div>
            </div>

        </div>
    );
};

export default TaskCommentAddFormComponent;