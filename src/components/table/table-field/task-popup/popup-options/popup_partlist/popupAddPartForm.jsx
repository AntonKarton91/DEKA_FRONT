import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../task_popup.module.css';
import PopupLogo from './popupLogo';
import classNames from 'classnames';
import cnBind from 'classnames/bind';
import {addParticipantToList, appPartToPopupAction} from "../../../../../../actions/actionCreaters";
import {getParts} from "../../../../../../pureFunctions/pureFunctions";

const cx = cnBind.bind(classes)

const PopupAddPartForm = ({}) => {
    const dispatch = useDispatch()
    const shown = useSelector(state => state.taskPopup.showPartAddForm)
    const userList = useSelector(state => state.users)
    const taskPopup = useSelector(state => state.taskPopup)
    const list = useSelector(state => state.list)
    const cls = cx('popup_add_part_form', {is_shown: shown})

    function fun (id){
        dispatch(addParticipantToList({
            colID: taskPopup.columnID,
            taskID: taskPopup.taskID,
            partID: id,
        }))
        console.log(getParts(list, taskPopup.columnID, taskPopup.taskID), 45545454)
        dispatch(appPartToPopupAction(getParts(list, taskPopup.columnID, taskPopup.taskID)))
    }

    return (
        <div className={cls}>
            <div>Участники доски</div>
            <div className={classes.form_part_list}>
                {
                    userList.map(item => {
                        return <PopupLogo srcLogo={item.url} key={item.id} id={item.id} foo={fun}/>
                    })
                }
            </div>         
        </div>
    )
    

}
    

export default PopupAddPartForm;