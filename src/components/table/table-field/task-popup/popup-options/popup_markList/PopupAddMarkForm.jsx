import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MarkIconComponent from "../../../../../UI1/mark-icon/MarkIcon.Component";
import cnBind from 'classnames/bind';
import classes from "../../task_popup.module.css";
import {addMarkToList, showMarkAddFormAction} from "../../../../../../actions/actionCreaters";
import {taskDetailEdit} from "../../../../../../actions/asyncActions/listData";
import {taskDetailEditAction} from "../../../../../../reducers/TaskDetailReducer";
import {editTaskListAction} from "../../../../../../reducers/ColumnReducer";



const cx = cnBind.bind(classes)


const PopupAddMarkForm = ({r, taskDetail}) => {
    const dispatch = useDispatch()
    const shown = useSelector(state => state.task.showMarkAddForm)
    const allMarks = useSelector(state => state.cartMarks)
    const taskPopup = useSelector(state => state.task)
    const cls = cx('popup_add_mark_form', {is_shown: shown})
    const formWindow = useRef(null)

    function getMarks(id, list) {
        if (list.includes(id)){
            list = list.filter(item => {
                return item !== id
            })
        } else {list.push(id)}
        return list
    }

    function fun (id){
        const markList = getMarks(id, taskDetail.marks)
        dispatch(editTaskListAction({id: taskDetail.id,
                                            taskPosition: taskDetail.taskPosition,
                                            name: taskDetail.name,
                                            participants: taskDetail.participants,
                                            marks: markList,
                                            date: taskDetail.date,
                                            column: taskDetail.column}))
        dispatch(taskDetailEditAction({...taskDetail, marks: markList}))
        dispatch(taskDetailEdit({...taskDetail, marks: markList}))
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
            {allMarks.map((mark, id) => {
                return <MarkIconComponent color={mark.color}
                                          child={mark.title}
                                          key={id}
                                          popup
                                          id={mark.id}
                                          foo={fun}
                />
            })}
        </div>
    );
};

export default PopupAddMarkForm;