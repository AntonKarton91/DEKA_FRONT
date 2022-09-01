import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showPartAddFormAction } from '../../../../../../actions/actionCreaters';
import classes from '../../task_popup.module.css';
import PopupAddPartForm from './popupAddPartForm';
import PopupLogo from './popupLogo';


const PopupPartList = ({}) => {
    const dispatch = useDispatch()
    const participants = useSelector(state => state.taskPopup.participants)
    const showPartAddForm = useSelector(state => state.taskPopup.showPartAddForm)
    const users = useSelector(state => state.users)

    function ShowForm(){
        dispatch(showPartAddFormAction())
    }


    return (
        <div>
            <div className={classes.right_menu__title}>Участники</div>

            <div className={classes.popup_options}>
                {users.map(item => {
                    if(participants.includes(item.id)){
                        return (<PopupLogo srcLogo={ item.url } key={item.id}/>)
                    }
                })}
                <div className={classes.plus}>
                    <div onClick={ShowForm} className={classes.popup_part_logo} >+</div>
                    <PopupAddPartForm />
                </div>

            </div>
            
        </div>
    )
    

}
    

export default PopupPartList;