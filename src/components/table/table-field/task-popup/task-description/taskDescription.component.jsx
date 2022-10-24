import React, {createRef, useEffect, useRef, useState} from 'react';
import classes from '../task_popup.module.css'
import {useDispatch, useSelector} from "react-redux";
import EditDescriptionComponent from "./editDescription.Component";
import {taskDetailEdit} from "../../../../../actions/asyncActions/listData";
import {taskDetailEditAction} from "../../../../../reducers/TaskDetailReducer";


const TaskDescriptionComponent = ({taskDetail}) => {
    const [isActive, setIsActive] = useState(false)
    const {taskDescription} = taskDetail

    const dispatch = useDispatch()
    console.log(taskDescription, 'taskDescription')

    function saveBody(val){
        dispatch(taskDetailEdit({...taskDetail, taskDescription: val}))
        dispatch(taskDetailEditAction({...taskDetail, taskDescription: val}))
        setIsActive(false)
    }

    function bodyClickHandler(e) {
        if (!isActive) {
            setIsActive(true)
            // document.addEventListener('mousedown', close)
            //
            // function close(event) {
            //     if (event.target === ref.current){
            //         return
            //     }
            //     else if (event.target !== e.target) {
            //
            //         document.removeEventListener('mousedown', close)
            //         setIsActive(false)
            //     }
            // }
        }
    }



    return (
        <div className={classes.describeContainer}>
            <div className={classes.describeTitle}>Описание</div>
            {
                isActive ?  <EditDescriptionComponent  initBody={taskDescription} saveBody={saveBody}/>
                    :  <div className={classes.descriptionBody1}
                            onClick={(e)=>bodyClickHandler(e)}>
                        {taskDescription}
                        </div>
            }

        </div>
    );
};



export default TaskDescriptionComponent;