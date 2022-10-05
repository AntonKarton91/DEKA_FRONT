import React, {useRef, useState} from 'react';
import classes from './task_popup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { taskPopupActivateAction } from '@actions/actionCreaters';
import './styles_popup.css'
import PopupRightMenu from './popup-right-menu/popupRightMenu';
import PopupOptions from './popup-options/popupOptions';
import {getTask} from "../../../../tools/pureFunctions/pureFunctions";
import TaskDescriptionComponent from "./task-description/taskDescription.component";
import CommentListComponent from "../../../UI1/comment-list-component/Comment-List.Component";

const TaskPopup = ({}) => {
    const dispatch = useDispatch()
    const popupData = useSelector(state => state.task)
    const data = useSelector(state => state.list)
    const fromGlobalTask = getTask(popupData.columnID, popupData.taskID, data)
    const popupRef = useRef()
    console.log(popupData)
    function setPopupActive() {
        dispatch(taskPopupActivateAction({
            isActive: false,
            columnID: '',
            taskID: '',
            taskDate: new Date(),
        }))
    }



    return (
        <div className={classes.popup_wrapper} onClick={setPopupActive}>
            <div className={classes.popup_container} onClick={e => e.stopPropagation()} ref={popupRef}>
                <div className="close_btn material-symbols-outlined " onClick={setPopupActive}>
                    close
                </div>
                <div className={classes.popup_inner}>
                    <div className={classes.popup_logo}>
                        {fromGlobalTask.name}
                    </div>
                    <div className={classes.popup_body}>
                        <div className={classes.left_info}>
                            <PopupOptions fromGlobalTask={fromGlobalTask} r={popupRef}/>
                            <TaskDescriptionComponent fromGlobalTask={fromGlobalTask} />
                            <CommentListComponent list={popupData}/>
                        </div>

                        <PopupRightMenu />
                    </div>
                </div>
            </div>
        </div>
    )
    

}
    

export default TaskPopup;