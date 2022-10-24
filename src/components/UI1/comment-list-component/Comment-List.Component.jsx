import React, {useState} from 'react';
import TaskCommentItemComponent from "./TaskCommentItem.Component";
import classes from './task_comments.module.css'
import TaskCommentAddFormComponent from "./TaskCommentAddForm.Component";


const CommentListComponent = ({list=[]}) => {

    function sortedByDate(a,b) {
        if (a.createDate > b.createDate){
            return -1
        } else return 1
    }
    return (
        <div className={classes.list_container}>
            <div className={classes.title}>Действия</div>
            <TaskCommentAddFormComponent />
            {
                list.comments ? list.comments.sort(sortedByDate).map((comment, index) => {
                return <TaskCommentItemComponent key={index} commentData={comment}/>
            }) : null
            }
        </div>
    );
};

export default CommentListComponent;