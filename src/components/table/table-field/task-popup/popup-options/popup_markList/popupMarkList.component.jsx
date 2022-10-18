import React from 'react';
import PopupLogo from "../popup_partlist/popupLogo";
import PopupAddPartForm from "../popup_partlist/popupAddPartForm";
import classes from '../../task_popup.module.css';
import {useDispatch, useSelector} from "react-redux";
import MarkIconComponent from "../../../../../UI1/mark-icon/MarkIcon.Component";
import PopupAddMarkForm from "./PopupAddMarkForm";
import {showMarkAddFormAction} from "../../../../../../actions/actionCreaters";


const PopupMarkListComponent = ({taskDetail, r}) => {
    const dispatch = useDispatch()
    const marks = useSelector(state => state.cartMarks)
    function showForm(){
        dispatch(showMarkAddFormAction())
    }

    return (
        <div className={classes.option_container}>
            <div className={classes.right_menu__title}>Метки</div>

            <div className={classes.popup_options}>
                {marks.map(item => {
                    if(taskDetail?.marks?.includes(item.id)){
                        return (<MarkIconComponent color={item.color} child={item.title} key={item.id} popup />)
                    }
                })}
                <div className={classes.plus}>
                    <div onClick={showForm} className={classes.popup_mark_plus} >+</div>
                    <PopupAddMarkForm r={r} taskDetail={taskDetail}/>
                </div>

            </div>

        </div>
    )
}

export default PopupMarkListComponent;