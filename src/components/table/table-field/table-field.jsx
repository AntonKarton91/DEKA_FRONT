import React, {useEffect, useState} from 'react';
import './table-field.css'
import TableColumn from "./table-column/tableColumn";
import bgImage from '../../../static/images/bg.jpg'
import {useDispatch, useSelector} from "react-redux";
import { addColumnAction } from '../../../actions/actionCreaters';
import AddColumnButton from './add-column-button/addColumnButton';
import TaskPopup from './task-popup/TaskPopup';
import {logDOM} from "@testing-library/react";

const TableField = () => {
    const dispatch = useDispatch()
    const columnList = useSelector(state => state.list)
    const taskPopup = useSelector(state => state.taskPopup)


    function ColumnList() {
        return  columnList.map((item, index) => {
            return <TableColumn item = {item} key = {item.id}/>})
    }

    function addColumn() {
        const i = {columnName: 'Новая колонка', id: Math.random(), taskList: []}
        dispatch(addColumnAction(i))
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