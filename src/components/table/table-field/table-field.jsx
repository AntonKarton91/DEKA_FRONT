import React, {useEffect, useState} from 'react';
import '../../../styles/app-styles.scss'
import TableColumn from "./table-column/tableColumn";
import bgImage from '../../../static/images/bg1.jpg'
import {useDispatch, useSelector} from "react-redux";
import {addColumnAction, fetchMarksListAction} from '../../../actions/actionCreaters';
import AddColumnButton from './add-column-button/addColumnButton';
import TaskPopup from './task-popup/TaskPopup';
import {fetchList, postNewColumn} from "../../../actions/asyncActions/listData";
import {fetchUsersList} from "../../../actions/asyncActions/usersData";
import {fetchMarksList} from "../../../actions/asyncActions/marksData";

const TableField = () => {
    const dispatch = useDispatch()
    const columnList = useSelector(state => state.list)
    const taskPopup = useSelector(state => state.task)

    useEffect(() => {
        dispatch(fetchList())
        dispatch(fetchUsersList())
        dispatch(fetchMarksList())
    }, [])

    function ColumnList() {
        return  columnList.map((item, index) => {
            return <TableColumn item = {item} key = {item.id}/>})
    }

    function addColumn() {
        const i = {columnName: 'Новая колонка', id: Math.random(), taskList: []}
        dispatch(postNewColumn(i))
    }

    return (

        <div className='table-container'>
            <img className='bg' src={bgImage} alt=""/>
            <ColumnList/>
            <AddColumnButton addCol={addColumn}/>
            {
                taskPopup.isActive ? <TaskPopup/> : ''
            }
            

        </div>

    );
};

export default TableField;