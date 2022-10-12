import React, {useState} from 'react';
import './table-column.css'
import TaskPreview from "../task-preview/TaskPreview";
import NewTaskForm from "./new-task-form/NewTaskForm";
import {useDispatch} from 'react-redux';
import {setCartAction} from '../../../../actions/actionCreaters';
import {sortTasks} from "../../../../tools/tasks/sortTasks";
import {putNewTask} from "../../../../actions/asyncActions/listData";

const TableColumn = (props) => {
    const dispatch = useDispatch()
    const colName = props.item.columnName
    const [isNewForm, setIsNewForm] = useState(false)
    const [columnName] = useState(colName)
    const [data] = useState(props.item.taskList)
    const colID = props.item.id


    const TaskList = () => {
        return data.sort(sortTasks).map((dat) => {
            return(
                <TaskPreview colID={props.item.id} taskListData={dat}  key={dat.id} />
            )
        })
    }


    function addTask (name) {
        name.taskPosition = data.length + 1
        const payload = {
            id: colID,
            name,
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
        const targetCart = {
            colID,
            taskPosition: 0
        }
        dispatch(setCartAction({targetCart}))
    }


    return (
        <div className='column-container'>
            <div className='column'
                 draggable={true}
                 onDragOver={(e) => dropHandler(e)}>
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