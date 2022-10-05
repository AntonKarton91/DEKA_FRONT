import React, {useState} from 'react';
import classes from '../task_popup.module.css';
import PopupPartList from './popup_partlist/PopupPartList';
import PopupMarkListComponent from "./popup_markList/popupMarkList.component";
import CalendarComponent from "../../../../UI1/popup_calendar/Calendar.Component";
import PopupDateComponent from "./popup_date/PopupDate.Component";


const PopupOptions = ({fromGlobalTask, r}) => {
   

    return (
        <div className={classes.popup_options}>
            <PopupPartList fromGlobalTask={fromGlobalTask} r={r}/>
            <PopupMarkListComponent fromGlobalTask={fromGlobalTask} r={r}/>
            <PopupDateComponent r={r} />

        </div>
    )
    

}
    

export default PopupOptions;