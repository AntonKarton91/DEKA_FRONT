import React, {useEffect, useRef, useState} from 'react';
import './table-column.css'
import TaskPreview from "../task-preview/TaskPreview";
import NewTaskForm from "./new-task-form/NewTaskForm";
import {useDispatch, useSelector} from 'react-redux';
import {dndList, putNewTask} from "../../../../actions/asyncActions/listData";
import {dnd} from "../../../../reducers/ColumnReducer";
import {useDrop} from "react-dnd";

const TableColumn = (props) => {
    const ref =useRef()
    const dispatch = useDispatch()
    const colName = props.column.columnName
    const [isNewForm, setIsNewForm] = useState(false)
    const [columnName] = useState(colName)
    const colID = props.column.id
    const tasksOrder = props.column.order
    const {taskList, columnList} = useSelector(state => state.list)


    const [{isOver}, drop] = useDrop(() => ({
            accept: 'CART',
            drop: (item) => {
                if (props.column.order.length === 0){
                    dropToColumn(item.id)
                }
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),

        }
    ))

    function dropToColumn(dropCartID){
        if (dropCartID.column === colID){
            return
        }
        const prevCartColumn = dropCartID.column
        let orderFrom = []
        let orderTo = []
        if (props.column.order.length === 0){
            columnList.forEach(col => {
                if (col.id === dropCartID.column){
                    const cartInOrderID = col.order.indexOf(dropCartID.id)
                    col.order.splice(cartInOrderID, 1)
                    orderFrom = col.order
                }
            })
            columnList.forEach(col => {
                if (col.id === props.column.id){
                    col.order.push(dropCartID.id)
                    orderTo = col.order
                }
            })
            dropCartID.column = props.column.id

            const carts = {
                list: columnList,
                cart: dropCartID,
                isEmpty: 0,
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
    }


    const TaskList = () => {
        return tasksOrder.map((taskData) => {
            const item = taskList.find(e => e.id === taskData)
            return(
                <TaskPreview colID={props.column.id} colData={props.column} taskData={item} key={item.id}/>
            )
        })
    }

    useEffect(() => {
        if (ref.current && !isOver) {
            ref.current.style.marginTop = '0'
        }
    }, [isOver])


    function addTask (data) {
        const payload = {
            ...data,
            id: colID,
            date: new Date()
        }
        dispatch(putNewTask(payload))
    }

    function clearForm(){
        setIsNewForm(false)
    }

    function NewTask(){
        if (!isNewForm) {
            return (
                <div className='new-task-btn' onClick={() => {
                    setIsNewForm(prev => !prev)
                }}>
                    + Новая задача
                </div>
            )
        }
    }

    function over(e) {
        e.preventDefault()
    }

    return (
        <div className='column-container' ref={drop}>
            <div className='column'
                 onDragOver={(e) => over(e)}>
                <div className='column-name'>
                    {columnName}
                </div>
                <div className='task-list' style={{marginTop: (isOver && props.column.order.length === 0) ? '20px' : '0'}}>
                   <TaskList/>
                </div>
                <NewTaskForm showForm = { isNewForm } clearForm = { clearForm } addTask = { addTask }/>
                <NewTask/>
            </div>

        </div>
    );
};

export default TableColumn;