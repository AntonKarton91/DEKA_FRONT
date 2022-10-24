import React, {useEffect, useRef, useState} from 'react';
import classes from './task_popup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { taskPopupActivateAction } from '@actions/actionCreaters';
import './styles_popup.css'
import PopupRightMenu from './popup-right-menu/popupRightMenu';
import PopupOptions from './popup-options/popupOptions';
import {getTask} from "../../../../tools/pureFunctions/pureFunctions";
import TaskDescriptionComponent from "./task-description/taskDescription.component";
import CommentListComponent from "../../../UI1/comment-list-component/Comment-List.Component";
import {fetchTaskDetail, taskDetail} from "../../../../actions/asyncActions/listData";

const TaskPopup = ({}) => {
    const dispatch = useDispatch()
    const popupData = useSelector(state => state.task)
    const taskList = useSelector(state => state.tasks)
    const [taskData, setTaskData] = useState({})
    const taskDetail = useSelector(state => state.taskDetail)
    console.log(taskDetail,  321321321321)


    useEffect((taskList) => {
        dispatch(fetchTaskDetail(popupData.taskID))

    }, [])

    // const fromGlobalTask = getTask(popupData.columnID, popupData.taskID, data)
    const popupRef = useRef()
    //
    // useEffect(() => {
    //     const p = {id: popupData.taskID}
    //     dispatch(taskDetail(p))
    //     console.log(popupData)
    // }, [])
    //
    //
    function setPopupActive() {
        dispatch(taskPopupActivateAction({
            isActive: false,
            columnID: '',
            taskID: '',
            taskDate: new Date(),
        }))
    }


    return (
        <div className={classes.popup_wrapper}>
            <div className={classes.popup_container} ref={popupRef} id='popup'>
                <div className="close_btn material-symbols-outlined " onClick={setPopupActive}>
                    close
                </div>
                <div className={classes.popup_inner}>
                    <div className={classes.popup_logo}>
                        {taskDetail.name}
                    </div>
                    <div className={classes.popup_body}>
                        <div className={classes.left_info}>
                            <PopupOptions taskDetail={taskDetail} r={popupRef}/>
                            <TaskDescriptionComponent taskDetail={taskDetail} />
                            <CommentListComponent list={taskDetail}/>
                        </div>

                        <PopupRightMenu />
                    </div>
                </div>
            </div>
        </div>
    )


}


export default TaskPopup;