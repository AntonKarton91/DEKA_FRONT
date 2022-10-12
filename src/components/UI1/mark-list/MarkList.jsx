import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './mark-list.module.css'
import './mark-list.css'
import {getSortedList} from "../../../tools/pureFunctions/pureFunctions";
import MarkIconComponent from "../mark-icon/MarkIcon.Component";


const MarkList = ({markList, list}) => {
    return (
            <div className='mark_list'>
                {getSortedList(markList).map((item, id) => {
                if(list.includes(item.id)){
                   return <MarkIconComponent color={item.color} child={item.title} key={id} />
                }
                })}
            </div>
    );
};

export default MarkList;