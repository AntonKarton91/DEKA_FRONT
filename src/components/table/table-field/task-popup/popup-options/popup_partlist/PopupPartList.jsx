import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showPartAddFormAction } from '../../../../../../actions/actionCreaters';
import classes from '../../task_popup.module.css';
import PopupAddPartForm from './popupAddPartForm';
import PopupLogo from './popupLogo';





const PopupPartList = ({taskDetail, r}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    function ShowForm(){
        dispatch(showPartAddFormAction())
    }


    return (
        <div className={classes.option_container}>
            <div className={classes.right_menu__title}>Участники</div>

            <div className={classes.popup_options}>
                {users.map(item => {
                    if(taskDetail?.participants?.includes(item.id)){
                        return (<PopupLogo srcLogo={ item.ava } key={item.id}/>)
                    }
                })}
                <div className={classes.plus}>
                    <div onClick={ ShowForm } className={classes.popup_part_logo} >+</div>
                    <PopupAddPartForm taskDetail={taskDetail} r={r}/>
                </div>

            </div>
            
        </div>
    )
    

}
    

export default PopupPartList;