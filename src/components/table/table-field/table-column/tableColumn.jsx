import React, {useEffect, useMemo, useState} from 'react';
import './table-column.css'
import TaskPreview from "../task-preview/TaskPreview";
import NewTaskForm from "./new-task-form/NewTaskForm";
import {useDispatch, useSelector} from 'react-redux';
import {setCartAction} from '../../../../actions/actionCreaters';
import {sortTasks} from "../../../../tools/tasks/sortTasks";
import {dndList, putNewTask} from "../../../../actions/asyncActions/listData";
import {addTaskIDToColumnAction, dnd} from "../../../../reducers/ColumnReducer";
import {setCartAction1} from "../../../../reducers/DNDReducer";

const TableColumn = (props) => {
    const dispatch = useDispatch()
    const colName = props.column.columnName
    const [isNewForm, setIsNewForm] = useState(false)
    const [columnName] = useState(colName)
    const colID = props.column.id
    const tasksOrder = props.column.order
    const {taskList, columnList} = useSelector(state => state.list)
    const prevCart = useSelector(state => state.DND)

    const TaskList = () => {
        return tasksOrder.map((taskData) => {
            const item = taskList.find(e => e.id === taskData)
            return(
                <TaskPreview colID={props.column.id} taskData={item} key={item.id} DND={DND}/>
            )
        })
    }

    function DND(prevCart){
        // a = prevCart

    }

    function dropHandler(e){


        console.log(prevCart)
        // const c = prevC
        // console.log(c)
        // if (props.column.order.length === 0){
        //     let orderTo = []
        //     columnList.forEach(col => {
        //         if (col.id === props.column.id){
        //             col.order.push(prevC.id)
        //             orderTo = [...col.order]
        //         }
        //     })
        //     const carts = {
        //         list: columnList,
        //         cart: prevC,
        //         isEmpty: 1,
        //         colTo: {
        //             id: props.column.id,
        //             orderTo
        //         }
        //     }
        //
        //     // dispatch(dnd(carts))
        //     dispatch(dndList(carts))
        // }
    }

    function addTask (data) {
        const payload = {
            ...data,
            id: colID,
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
        <div className='column-container'>
            <div className='column'
                 // draggable={true}
                 onDragOver={(e) => over(e)}
                 onDrop={e => dropHandler(e)}
            >
                <div className='column-name'>
                    {columnName}
                </div>
                <div className='task-list'>
                   <TaskList/>
                </div>
                <NewTaskForm showForm = { isNewForm } clearForm = { clearForm } addTask = { addTask }/>
                <NewTask/>
            </div>

        </div>
    );
};

export default TableColumn;