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


const TaskPreview = ({taskData, colID}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const marks = useSelector(state => state.cartMarks)
    // const {currentCart, targetCart} = useSelector(state => state.DND)
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


    function foo(curTaskPos, targTaskPos){
        dispatch(changeTaskPositionAction({curTaskPos, targTaskPos}))
    }

    function onDragLeaveHandler(e) {
        const elem = e.target.closest('.task-prev')
        elem.style.boxShadow = 'none'
    }

    function onDragOvertHandler(e) {
        e.preventDefault()
        if(e.target.closest('.task-prev')) {
            const elem = e.target.closest('.task-prev')
            elem.style.boxShadow = '0 4px 3px gray'
        }
    }

    // function onDragEndHandler(e) {
    //     foo(currentCart, targetCart)
    //     // dispatch(resetCartAction())
    //
    // }

    function onDragStartHandler(e, currentCart) {
        dispatch(setCartAction1(currentCart))
    }

    function dropHandler(e, targetCart) {
        const orderColFrom = columnList.find(c => c.id === targetCart.column).order
        console.log(orderColFrom)
        const indexOfTargetCart = orderColFrom.indexOf(targetCart.id)

        orderColFrom.splice(indexOfTargetCart, 1)
        console.log(orderColFrom)


        const newList = columnList.map(col => {
            if (col.id === targetCart.column){
                console.log(col)
                return {...col, order: orderColFrom}
            } else return col
        })
        // console.log(newList)

        const orderColTo = newList.find(c => c.id === prevCart.column).order

        const indexOfPrevCart = orderColTo.indexOf(prevCart.id)
        orderColTo.splice(indexOfPrevCart, 0, targetCart.id)

        const newnewList = newList.map(col => {
            if (col.id === prevCart.column){
                return {...col, order: orderColTo}
            } else return col
        })
        // console.log(newnewList)
        prevCart.column = colID

        const carts = {
            cart: targetCart,
            colFrom: {
                id: targetCart.column,
                orderColFrom
            },
            colTo: {
                id: prevCart.column,
                orderColTo
            }
        }
        // dispatch(dnd(carts))
        // dispatch(dndList(carts))}
    }

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