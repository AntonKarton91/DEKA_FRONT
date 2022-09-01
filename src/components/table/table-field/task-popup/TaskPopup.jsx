import React, {useState} from 'react';
import classes from './task_popup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { taskPopupActivateAction } from '../../../../actions/actionCreaters';
import './styles_popup.css'
import RightMenuButton from '../UI/right-menu-button/RightMenuButton';
import PopupRightMenu from './popup-right-menu/popupRightMenu';
import PopupOptions from './popup-options/popupOptions';

const TaskPopup = ({popupActive}) => {
    const dispatch = useDispatch()
    const popupData = useSelector(state => state.taskPopup)

    function setPopupActive() {
        dispatch(taskPopupActivateAction({
            isActive: false,
            columnID: '',
            taskID: '',
        }))
    }

    return (
        <div className={classes.popup_wrapper} onClick={setPopupActive}>
            <div className={classes.popup_container} onClick={e => e.stopPropagation()}>
                <div className="close_btn material-symbols-outlined " onClick={setPopupActive}>
                    close
                </div>
                <div className={classes.popup_inner}>
                    <div className={classes.popup_logo}>
                        {popupData.title}
                    </div>
                    <div className={classes.popup_body}>
                        <div className={classes.left_info}>
                            <PopupOptions/>
                        </div>

                        <PopupRightMenu/>
                    </div>
                </div>
            </div>
        </div>
    )
    

}
    

export default TaskPopup;