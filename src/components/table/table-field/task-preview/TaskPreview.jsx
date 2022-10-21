import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../../styles/table-field.css';
import ParticipantList from "../../../UI1/participant-list/ParticipantList";
import MarkList from '../../../UI1/mark-list/MarkList';
import {
    changeTaskPositionAction,
    taskPopupActivateAction,
} from '../../../../actions/actionCreaters';
import DatePreviewComponent from "../../../UI1/date-preview/DatePreview.Component";
import {dndList, taskDetail} from "../../../../actions/asyncActions/listData";
import {setCartAction1} from "../../../../reducers/DNDReducer";
import {find} from "styled-components/test-utils";
import {dnd} from "../../../../reducers/ColumnReducer";


const TaskPreview = ({taskData, colID, DND}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const marks = useSelector(state => state.cartMarks)
    // const {currentCart, targetCart} = useSelector(state => state.DND)
    const [dndCart, setDNDCart] = useState({})
    const prevCart = useSelector(state => state.DND)
    const {taskList, columnList} = useSelector(state => state.list)


    function popupActivate() {
        let date
        if(taskData.date){
            date = taskData.date
        } else date = new Date()
        dispatch(taskDetail({...taskData, date}))
        dispatch(taskPopupActivateAction({
            isActive: true,
            columnID: colID,
            taskID: taskData.id,
        }))
        window.addEventListener('mousedown', open)

        function open (e) {
            if(!e.target.closest('#popup')) {
                dispatch(taskPopupActivateAction({
                    isActive: false,
                    columnID: '',
                    taskID: '',
                    taskDate: new Date(),
                }))
                window.removeEventListener('mousedown', open)
            }}

        }


    function onDragLeaveHandler(e) {
        const elem = e.target.closest('.task-prev')
        elem.style.boxShadow = 'none'
        elem.style.marginTop = '0'
    }

    function onDragOvertHandler(e) {
        e.preventDefault()
        if(e.target.closest('.task-prev')) {
            const elem = e.target.closest('.task-prev')
            elem.style.boxShadow = '0 4px 3px gray'

        }
    }



    function onDragStartHandler(e, currentCart) {
        DND(currentCart)
        dispatch(setCartAction1(currentCart))
        setDNDCart(currentCart)
    }

    function dropHandler(e, targetCart) {
        if (e.target.closest('.task-prev')){
            if (prevCart.id === targetCart.id){
                DND({})
                dispatch(setCartAction1({}))
                setDNDCart({})
                return
            }
            let orderFrom = []
            let orderTo = []
            columnList.forEach(col => {
                if (col.id === prevCart.column){
                    const indexOfTargetCart = col.order.indexOf(prevCart.id)
                    col.order = col.order.filter((i, ind) => ind !== indexOfTargetCart)
                    orderFrom = [...col.order]
                }
            })
            columnList.forEach(col => {
                if (col.id === targetCart.column){
                    const indexOfTargCart = col.order.indexOf(targetCart.id)
                    col.order.splice(indexOfTargCart, 0, prevCart.id)
                    orderTo = [...col.order]

                }
            })
            const carts = {
                list: columnList,
                cart: prevCart,
                isEmpty: 0,
                colFrom: {
                    id: prevCart.column,
                    orderFrom
                },
                colTo: {
                    id: targetCart.column,
                    orderTo
                }
            }

            dispatch(dnd(carts))
            dispatch(dndList(carts))
            dispatch(setCartAction1({}))
            DND({})
            setDNDCart({})
        }}


    return (
        <div className='task-prev'
             pos={taskData.taskPosition}
             onDragStart={(e) => onDragStartHandler(e, taskData)}
             // onDragLeave={(e) => onDragLeaveHandler(e)}
             // onDragOver={(e) => onDragOvertHandler(e)}
             // onDragEnd={(e) => onDragEndHandler(e)}
             onDrop={e => dropHandler(e, taskData)}
             draggable={true}
             onClick={() => popupActivate()}>
            {/*<div className='space' onDrop={e => dropHandler(e, taskData)}></div>*/}
            <MarkList markList={ marks } list={ taskData.marks }/>
            <div>
                {taskData.name}
            </div>
            <div className={'prev-options__container'}>

                <DatePreviewComponent date={ taskData.date }/>
                <ParticipantList columnID={ taskData.id }
                                 list={ taskData.participants }
                                 allUserList={users}/>
            </div>
        </div>
    );
};

export default TaskPreview;