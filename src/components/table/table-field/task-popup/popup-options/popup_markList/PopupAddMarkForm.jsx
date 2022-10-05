import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MarkIconComponent from "../../../../../UI1/mark-icon/MarkIcon.Component";
import cnBind from 'classnames/bind';
import classes from "../../task_popup.module.css";
import {addMarkToList, showMarkAddFormAction} from "../../../../../../actions/actionCreaters";


const cx = cnBind.bind(classes)


const PopupAddMarkForm = ({r}) => {
    const dispatch = useDispatch()
    const shown = useSelector(state => state.task.showMarkAddForm)
    const allMarks = useSelector(state => state.cartMarks)
    const taskPopup = useSelector(state => state.task)
    const cls = cx('popup_add_mark_form', {is_shown: shown})
    const formWindow = useRef(null)

    function fun (id){
        dispatch(addMarkToList({
            colID: taskPopup.columnID,
            taskID: taskPopup.taskID,
            markID: id,
        }))
    }

    useEffect(() =>{
        if(!shown) return
        const handleClick = e => {
            if (!formWindow.current) return
            if(!formWindow.current.contains(e.target)){
                dispatch(showMarkAddFormAction())
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
            <div>Метки</div>
            {allMarks.map(mark => {
                return <MarkIconComponent color={mark.color}
                                          child={mark.title}
                                          key={mark.id}
                                          popup
                                          id={mark.id}
                                          foo={fun}
                />
            })}
        </div>
    );
};

export default PopupAddMarkForm;