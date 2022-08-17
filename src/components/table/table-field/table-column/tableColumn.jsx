import React, {useEffect, useState} from 'react';
import './table-column.css'
import TaskPreview from "../task-preview/TaskPreview";
import NewTaskForm from "./new-task-form/NewTaskForm";

const TableColumn = (props) => {
    const colName = props.item.columnName
    const [isNewForm, setIsNewForm] = useState(false)
    const [columnName, setColumnName] = useState(colName)
    const [data, setData] = useState(props.item.taskList)


    const TaskList = () => {
        return data.map((dat, index) => {
            return(
                <TaskPreview name={dat} key={dat.id} userList={props.userList}/>
            )
        })
    }



    function addTask (name) {
        setData([...data, name])
        console.log(name, props.item.id)
        props.addTask(name, props.item.id)
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