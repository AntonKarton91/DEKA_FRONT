import React, {useEffect, useState} from 'react';
import '../../../styles/app-styles.scss'
import TableColumn from "./table-column/tableColumn";
import bgImage from '../../../static/images/bg1.jpg'
import {useDispatch, useSelector} from "react-redux";
import AddColumnButton from './add-column-button/addColumnButton';
import TaskPopup from './task-popup/TaskPopup';
import {fetchColumns, fetchList, fetchTaskList, postNewColumn} from "../../../actions/asyncActions/listData";
import {fetchUsersList} from "../../../actions/asyncActions/usersData";
import {fetchMarksList} from "../../../actions/asyncActions/marksData";

const TableField = () => {
    const dispatch = useDispatch()
    const taskPopup = useSelector(state => state.task)
    const {taskList, columnList} = useSelector(state => state.list)

    useEffect(() => {
        dispatch(fetchList())
        dispatch(fetchTaskList())
        dispatch(fetchMarksList())
    }, [])



    function ColumnList() {

        return  columnList.map((column) => {
            return <TableColumn column={column}  taskList={taskList} key={column.id}/>})
    }

    function addColumn() {
        dispatch(postNewColumn({columnName: 'Новая колонка', tasks: [], columnType: 'WORK'}))
    }

    return (

        <div className='table-container'>
            <img className='bg' src={bgImage} alt=""/>
            <ColumnList/>
            <div>{taskPopup.isActive}</div>
            <AddColumnButton addCol={addColumn}/>
            {
                taskPopup.isActive ? <TaskPopup/> : ''
            }


        </div>

    );
};

export default TableField;