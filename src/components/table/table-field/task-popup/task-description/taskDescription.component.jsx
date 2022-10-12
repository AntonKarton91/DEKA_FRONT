import React, {createRef, useEffect, useRef, useState} from 'react';
import classes from '../task_popup.module.css'
import {useDispatch, useSelector} from "react-redux";
import EditDescriptionComponent from "./editDescription.Component";
import {taskDetailEdit} from "../../../../../actions/asyncActions/listData";
const ref = createRef();

const TaskDescriptionComponent = ({fromGlobalTask}) => {
    const [isActive, setIsActive] = useState(false)
    const {description} = useSelector(state => state.task)
    const d = useSelector(state => state.task)
    const [body, setBody] = useState('')
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
                    dispatch(taskDetailEdit({...d, name: fromGlobalTask.name, taskDescription: ref.current.value}))
                    console.log(ref.current.value)
                    setBody(ref.current.value)
                    document.removeEventListener('mousedown', close)
                    setIsActive(false)
                }
            }
        }
    }

    // function set(e){
    //     setBody(e.target.value)
    //     console.log(e.target.value)
    // }



    function A(){
        if (isActive){
            return (
                // <input type='textarea' className={classes.descriptionBody} ref={refA} value={body} onChange={event => set(event)}/>
                <EditDescriptionComponent ref={ref} initBody={description}/>
            )
        } else {
            return (
                <div className={classes.descriptionBody1} onClick={(e)=>bodyClickHandler(e)}>{description}</div>

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