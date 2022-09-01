import React, {useEffect, useState} from 'react';
import './table-column.css'
import TaskPreview from "../task-preview/TaskPreview";
import NewTaskForm from "./new-task-form/NewTaskForm";
import { useDispatch } from 'react-redux';
import { addTaskToColumnAction } from '../../../../actions/actionCreaters';

const TableColumn = (props) => {
    const dispatch = useDispatch()
    const colName = props.item.columnName
    const [isNewForm, setIsNewForm] = useState(false)
    const [columnName, setColumnName] = useState(colName)
    const [data, setData] = useState(props.item.taskList)
    const colID = props.item.id


    const TaskList = () => {
        return data.map((dat, index) => {
            return(
                <TaskPreview colID={props.item.id} taskListData={dat}  key={dat.id} />
            )
        })
    }


    function addTask (name) {
        const payload = {
            id: colID,
            name
        }
        dispatch(addTaskToColumnAction(payload))
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





    return (
        <div className='column-container'>
            <div className='column'>
                <div
                    className='column-name'
                >
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