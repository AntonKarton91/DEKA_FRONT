import React, {createRef, useEffect, useRef, useState} from 'react';
import classes from '../task_popup.module.css'
import {useDispatch, useSelector} from "react-redux";
import EditDescriptionComponent from "./editDescription.Component";
import {taskDetailEdit} from "../../../../../actions/asyncActions/listData";
const ref = createRef();

const TaskDescriptionComponent = ({taskDetail}) => {
    const [isActive, setIsActive] = useState(false)
    const {taskDescription} = taskDetail
    const dispatch = useDispatch()



    function bodyClickHandler(e) {
        if (!isActive) {
            setIsActive(true)
            document.addEventListener('mousedown', close)

            function close(event) {
                if (event.target === ref.current){
                    return
                }
                else if (event.target !== e.target) {
                    dispatch(taskDetailEdit({...taskDetail, taskDescription: ref.current.value}))
                    setBody(ref.current.value)
                    document.removeEventListener('mousedown', close)
                    setIsActive(false)
                }
            }
        }
    }

    function A(){
        if (isActive){
            return (
                <EditDescriptionComponent ref={ref} initBody={taskDescription}/>
            )
        } else {
            return (
                <div className={classes.descriptionBody1} onClick={(e)=>bodyClickHandler(e)}>{taskDescription}</div>

            )
        }
    }

    return (
        <div className={classes.describeContainer}>
            <div className={classes.describeTitle}>Описание</div>
            <A/>

        </div>
    );
};



export default TaskDescriptionComponent;