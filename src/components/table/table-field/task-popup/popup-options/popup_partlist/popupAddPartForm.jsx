import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../task_popup.module.css';
import PopupLogo from './popupLogo';
import cnBind from 'classnames/bind';
import {
    addParticipantToList,
    showPartAddFormAction
} from "../../../../../../actions/actionCreaters";
import {taskDetailEditAction} from "../../../../../../reducers/TaskDetailReducer";
import {taskDetailEdit} from "../../../../../../actions/asyncActions/listData";
import {editTaskListAction} from "../../../../../../reducers/ColumnReducer";


const cx = cnBind.bind(classes)

const PopupAddPartForm = ({taskDetail, r}) => {
    const dispatch = useDispatch()
    const shown = useSelector(state => state.task.showPartAddForm)
    const userList = useSelector(state => state.users)
    const taskPopup = useSelector(state => state.task)
    const cls = cx('popup_add_part_form', {is_shown: shown})
    const formWindow = useRef(null)

    function getParts(id, list) {
        if (list.includes(id)){
            list = list.filter(item => {
                return item !== id
            })
        } else {list.push(id)}
        return list
    }

    function fun (id){
        const partList = getParts(id, taskDetail.participants)


        dispatch(editTaskListAction({id: taskDetail.id,
                                    taskPosition: taskDetail.taskPosition,
                                    name: taskDetail.name,
                                    participants: partList,
                                    marks: taskDetail.marks,
                                    date: taskDetail.date,
                                    column: taskDetail.column}))
        dispatch(taskDetailEditAction({...taskDetail, participants: partList}))
        dispatch(taskDetailEdit({...taskDetail, participants: partList}))
    }

    useEffect(() =>{
        if(!shown) return

        const handleClick = e => {
            if (!formWindow.current) return
            if(!formWindow.current.contains(e.target)){
                dispatch(showPartAddFormAction())
            }
        }
        r.current.addEventListener("click", handleClick)
        return () => {
            if (r.current) {
                r.current.removeEventListener("click", handleClick)
            }
        }
    },[shown])


    return (
        <div className={cls} ref={formWindow}>
            <div>?????????????????? ??????????</div>
            <div className={classes.form_part_list}>
                {
                    userList.map(item => {
                        return <PopupLogo srcLogo={item.ava} key={item.id} id={item.id} foo={fun}/>
                    })
                }
            </div>         
        </div>
    )
    

}
    

export default PopupAddPartForm;