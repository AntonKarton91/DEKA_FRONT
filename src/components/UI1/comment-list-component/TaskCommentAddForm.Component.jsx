import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../../tools/pureFunctions/pureFunctions";
import classes from "./task_comments.module.css";
import {putNewComment} from "../../../actions/asyncActions/listData";

const TaskCommentAddFormComponent = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const user = getUser(users, 1)
    const [commentText, setCommentText] = useState('')
    const taskData = useSelector(state => state.task)

    function clickHandler(){
        if (commentText){
            dispatch(putNewComment({
                commentText,
                creater: 1,
                task: taskData.taskID
            }))
        }
        setCommentText((''))
    }

    return (

        <div className={classes.addFormContainer}>
            <img className={classes.image} src={user.url} alt=""/>
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