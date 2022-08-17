import React, {useEffect, useState} from 'react';
import './table-field.css'
import TableColumn from "./table-column/tableColumn";
import bgImage from '../../../static/images/bg.jpg'

const TableField = () => {
    const [columnList, setColumnList] = useState([
        {columnName: 'Задачи в очереди',
        id: Date.now(),
        taskList: [
            {id: 1, name: 'Лореаль, образец, маск Бар на полку, 119МК-7 (СФ)', participants: [{id: 1}]},
            {id: 2, name: 'L\'Oreal, ВИЗИ ПЭКи, образцы, №35 ЮЛ', participants: [{id: 1}]},
            {id: 3, name: 'Инситех, 78 подложек, №34 ЮЛ', participants: [{id: 2}]}
        ]}
    ])

    const [users, setUsers] = useState([
        {name: 'Антон', id: 1, url: "/react_project/src/static/images/ava_1.png"},
        {name: 'Михаил', id: 2, url: "http://localhost:3000/src/static/images/ava_1.png"},
    ])


    function addTask(task, colId) {
        setColumnList(prevState => {
            return  prevState.map(item => {
                if (colId === item.id){
                    return {...item, taskList: [...item.taskList, task]}
                } else {
                    return item
                }
            })
        })
    }

    function ColumnList() {
        return  columnList.map((item, index) => {

            return <TableColumn item = {item} key = {item.id} addTask = { addTask } userList={users}/>})
    }

    function addColumn() {
        const i = {columnName: 'Новая колонка', id: Date.now(), taskList: []}
        setColumnList(prevState => [...prevState, i]
        )
    }


    const AddColumnButton = ({addCol}) => {
        return (
            <div className='add-column-btn' onClick={addCol}>
                Добавить еще одну колонку
            </div>
        )
    }

    return (

        <div className='table-container'>
            <img className='bg' src={bgImage} alt=""/>
            <ColumnList/>
            <AddColumnButton addCol={addColumn}/>

        </div>

    );
};

export default TableField;