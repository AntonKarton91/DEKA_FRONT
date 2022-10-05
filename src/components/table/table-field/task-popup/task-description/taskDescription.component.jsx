import React, {useEffect, useRef} from 'react';
import classes from '../task_popup.module.css'
import {useSelector} from "react-redux";
const TaskDescriptionComponent = ({fromGlobalTask}) => {
    const descriptionRef = useRef()
    const {description} = useSelector(state => state.task)

    return (
        <div className={classes.describeContainer}>
            <div className={classes.describeTitle}>Описание</div>
            <div ref={descriptionRef} className={classes.descriptionBody}>{description}</div>
        </div>
    );
};

export default TaskDescriptionComponent;