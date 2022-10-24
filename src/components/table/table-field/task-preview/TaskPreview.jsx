import React, {useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../../styles/table-field.css';
import ParticipantList from "../../../UI1/participant-list/ParticipantList";
import MarkList from '../../../UI1/mark-list/MarkList';
import {taskPopupActivateAction,} from '../../../../actions/actionCreaters';
import DatePreviewComponent from "../../../UI1/date-preview/DatePreview.Component";
import {dndList, taskDetail} from "../../../../actions/asyncActions/listData";
import {dnd} from "../../../../reducers/ColumnReducer";

import {useDrag, useDrop} from "react-dnd";


const TaskPreview = ({taskData, colID,}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const marks = useSelector(state => state.cartMarks)
    const {columnList} = useSelector(state => state.list)

    const ref = useRef()


    const [{isDragging}, drag,] = useDrag(() => ({
        type: "CART",
        item: { id: taskData },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))


    const [{isOver}, drop] = useDrop(() => ({
        accept: 'CART',
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

        drop: (item, monitor) => {
            const rect = ref.current.getBoundingClientRect()
            const middleRect = rect.top + ((rect.bottom - rect.top) / 2)
            const diff = monitor.getClientOffset().y - middleRect

            if (diff>=0){
                dropToColumn(item.id, 'post')

            } else {
                dropToColumn(item.id, 'prev')
            }

        },

        hover: (item, monitor) => {
            if (!ref.current){
                return
            }
            if (item.id.id === taskData.id){
                return
            }
            const rect = ref.current.getBoundingClientRect()
            const middleRect = rect.top + ((rect.bottom - rect.top) / 2)
            const diff = monitor.getClientOffset().y - middleRect

            if (diff>=0){
                ref.current.style.paddingTop = '0'
                ref.current.style.paddingBottom = `70px`

            } else {
                ref.current.style.paddingBottom = '0'
                ref.current.style.paddingTop = '70px'
            }
        }
    }))
    drag(drop(ref))

    useEffect(() => {
        if (ref.current && !isOver) {
            ref.current.style.padding = '0'
        }
    }, [isOver])

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

    function dropToColumn(dropCartID, option){
        if (dropCartID.id === taskData.id){
            return
        }
        const prevCartColumn = dropCartID.column
        let orderFrom = []
        let orderTo = []
        columnList.forEach(col => {
            if (col.id === dropCartID.column){
                const cartInOrderID = col.order.indexOf(dropCartID.id)
                col.order.splice(cartInOrderID, 1)
                orderFrom = col.order
            }
        })
        if (option === 'prev'){
            columnList.forEach(col => {
                if (col.id === colID){
                    const cartInOrderID = col.order.indexOf(taskData.id)
                    col.order.splice(cartInOrderID, 0, dropCartID.id)
                    orderTo = col.order
                }
            })
        } else if (option === 'post'){
            columnList.forEach(col => {
                if (col.id === colID){
                    const cartInOrderID = col.order.indexOf(taskData.id)
                    col.order.splice(cartInOrderID+1, 0, dropCartID.id)
                    orderTo = col.order
                }
            })

        }
        dropCartID.column = colID
        const carts = {
            list: columnList,
            cart: dropCartID,
            colFrom: {
                id: prevCartColumn,
                orderFrom
            },
            colTo: {
                id: colID,
                orderTo
            }
        }
        dispatch(dnd(carts))
        dispatch(dndList(carts))
    }

    return (
        <div ref={ref}
             style={{display: isDragging ? 'none' : 'block', }}
             onClick={() => popupActivate()}>
            <div className='task-prev'>
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
        </div>
    );
};

export default TaskPreview;