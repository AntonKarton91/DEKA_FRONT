import React, {useState} from 'react';
import {useSelector} from "react-redux";
import classes from './task_comments.module.css'
import {MONTH} from "../../../tools/constants";
import {getUser} from "../../../Hooks/useGetUser";
// import {getUser} from "../../../tools/pureFunctions/pureFunctions";


const TaskCommentItemComponent = ({commentData}) => {
    const users = useSelector(state => state.users)
    const user = getUser(commentData.creater, users)


    return (
        <div className={classes.item}>
            <img className={classes.image}
                 src={user.ava}/>
            <div className={classes.inner}>
                <span className={classes.creater}>{user.name}</span>
                <span className={classes.date}>{`${new Date(commentData.createDate).getDate()} 
                        ${MONTH[new Date(commentData.createDate).getMonth()]} 
                        ${new Date(commentData.createDate).getFullYear()} ` }</span>
                <div className={classes.body}>{commentData.body}</div>
            </div>
        </div>
    );
};

export default TaskCommentItemComponent;