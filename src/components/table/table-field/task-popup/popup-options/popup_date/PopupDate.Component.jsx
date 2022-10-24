import React, {useEffect} from 'react';
import classes from '../../task_popup.module.css';
import {useDispatch, useSelector} from "react-redux";
import {showCalendarAction} from "../../../../../../actions/actionCreaters";
import CalendarComponent from "../../../../../UI1/popup_calendar/Calendar.Component";
import {MONTH} from "../../../../../../tools/constants";


const PopupDateComponent = ({r, taskDetail}) => {
    const dispatch = useDispatch()
    let { taskDate } = useSelector(state => state.task)
    const {selectedDate} = useSelector(state => state.calendar)
    const monthName = MONTH[selectedDate.getMonth()].slice(0, 3)


    function getTaskDate(){
        if (taskDate){
            taskDate = new Date(taskDate)
            return `${taskDate.getDate()} ${MONTH[taskDate.getMonth()].slice(0, 3)} ${taskDate.getHours()}:${taskDate.getMinutes()} >`
        } else {
            return `${selectedDate.getDate()} ${monthName} ${selectedDate.getHours()}:${selectedDate.getMinutes()} >`
        }
    }

    function showCalendar(){
        dispatch(showCalendarAction())

    }

    return (
        <div className={classes.option_container}>
            <div className={classes.right_menu__title}>Срок</div>
            <div className={classes.plus}>
                <div onClick={showCalendar}
                     className={classes.popup_date}
                    >{getTaskDate()}
                </div>
                <CalendarComponent r={r} taskDetail={taskDetail}/>
            </div>
        </div>
    )
}

export default PopupDateComponent;