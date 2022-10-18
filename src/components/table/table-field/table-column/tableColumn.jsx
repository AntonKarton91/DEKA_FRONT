import React, {useEffect, useMemo, useState} from 'react';
import './table-column.css'
import TaskPreview from "../task-preview/TaskPreview";
import NewTaskForm from "./new-task-form/NewTaskForm";
import {useDispatch, useSelector} from 'react-redux';
import {setCartAction} from '../../../../actions/actionCreaters';
import {sortTasks} from "../../../../tools/tasks/sortTasks";
import {putNewTask} from "../../../../actions/asyncActions/listData";
import {addTaskIDToColumnAction} from "../../../../reducers/ColumnReducer";

const TableColumn = (props) => {
    const dispatch = useDispatch()
    const colName = props.column.columnName
    const [isNewForm, setIsNewForm] = useState(false)
    const [columnName] = useState(colName)
    const colID = props.column.id
    const tasksOrder = props.column.order
    const {taskList, columnList} = useSelector(state => state.list)




    const TaskList = () => {
        return taskList.map((taskData) => {
            if (tasksOrder.includes(taskData.id)){
            return(

                <TaskPreview colID={props.column.id} taskData={taskData} prev={taskData.prev} key={taskData.id} />
            )}
        })
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

    function dropHandler(e) {
        e.preventDefault()
        // console.log(11)
        // // const targetCart = {
        // //     colID,
        // //     taskPosition: 0
        // // }
        // // dispatch(setCartAction({targetCart}))
    }


    return (
        <div className='column-container'>
            <div className='column'
                 draggable={true}
                 onDragOver={(e) => dropHandler(e)}
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