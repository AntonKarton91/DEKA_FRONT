import React, {useEffect, useRef, useState} from 'react';
import classes from './style-calendar.module.css';
import {useDispatch, useSelector} from "react-redux";
import {MONTH, WEEKDAYNAMES} from "../../../tools/constants";
import {
    changeMonthAction,
    changeTaskDateAction, setDateToListAction,
    showCalendarAction,
    showMarkAddFormAction, taskPopupDateChangeAction
} from "../../../actions/actionCreaters";
import {getMonthData} from "../../../tools/calendar/calendar";
import cnBind from "classnames/bind";
import FormButtonComponent from "../form-button/FormButton.Component";
import CalendarButtonComponent from "../inner-calendar-button/CalendarButton.Component";
import {parseDate} from "../../../tools/calendar/parseDate";
import {editTaskListAction} from "../../../reducers/ColumnReducer";
import {taskDetailEditAction} from "../../../reducers/TaskDetailReducer";
import {taskDetailEdit} from "../../../actions/asyncActions/listData";

const cx = cnBind.bind(classes)

const CalendarComponent = ({r, taskDetail}) => {
    const {selectedDate, initialDate} = useSelector(state => state.calendar)
    const shown = useSelector(state => state.task.showCalendar)
    const formWindow = useRef(null)
    const dispatch = useDispatch()
    const [temporaryTime, setTemporaryTime] = useState(selectedDate.toLocaleTimeString().slice(0,-3))
    const weekDayNames = WEEKDAYNAMES
    const cls = cx('container', {is_shown_flex: shown})
    const dayList = getMonthData(initialDate.getFullYear(), initialDate.getMonth())
    const taskPopup = useSelector(state => state.task)

    useEffect(() =>{
        if(!shown) return
        const handleClick = e => {
            if (!formWindow.current) return
            if(!formWindow.current.contains(e.target)){
                dispatch(showCalendarAction())
            }
        }
        r.current.addEventListener("click", handleClick)
        return () => {
            if (r.current) {
                r.current.removeEventListener("click", handleClick)
            }
        }

    },[shown])


    function isActive (date, selectedDate){
        return (date.getDate() === selectedDate.getDate())
        && (date.getFullYear() === selectedDate.getFullYear())
        && (date.getMonth() === selectedDate.getMonth())
    }


    function saveDateHandler(date){
        const hour = Number(date.split(':')[0])
        const min = Number(date.split(':')[1])
        const newDate = new Date(selectedDate.setHours(hour, min))
        // dispatch(changeTaskDateAction(newDate))
        // dispatch(setDateToListAction({
        //     colID: taskPopup.columnID,
        //     taskID: taskPopup.taskID,
        //     taskDate: newDate,
        // }))
        // dispatch(taskPopupDateChangeAction(newDate))

        dispatch(editTaskListAction({id: taskDetail.id,
                                            taskPosition: taskDetail.taskPosition,
                                            name: taskDetail.name,
                                            participants: taskDetail.participants,
                                            marks: taskDetail.marks,
                                            date: newDate,
                                            column: taskDetail.column}))
        dispatch(taskDetailEditAction({...taskDetail, date: newDate}))
        dispatch(taskDetailEdit({...taskDetail, date: newDate}))
        dispatch(showCalendarAction())
    }

    function handleMonthButtonClick(value) {
        dispatch(changeMonthAction(value))
    }

    function handleDayClick (date) {
        dispatch(changeTaskDateAction(date))
    }

    function changeTime(e){
        setTemporaryTime(parseDate(e))
    }

    return (
        <div className={cls} ref={formWindow}>
            Даты
            <header className={'calendar_header'}>
                <button onClick={()=>handleMonthButtonClick(-1)}>{'<'}</button>
                <div className={'calendar__header_date'}>{ MONTH[initialDate.getMonth()] } { initialDate.getFullYear() } </div>
                <button onClick={()=>handleMonthButtonClick(1)}>{'>'}</button>
            </header>

            <table>
                <thead>
                    <tr>
                        {weekDayNames.map(day => {
                            return <th key={day}>{day}</th>
                        })}
                    </tr>
                </thead>

                <tbody>
                {dayList.map((week, index) => {
                    return <tr key={index}>
                        {week.map((date, index) => {
                            if(date) {
                                return <CalendarButtonComponent key={index}
                                                                clickHandler={() => handleDayClick(date)}
                                                                val={date.getDate()}
                                                                isActive={isActive(date, selectedDate)}/>
                        } else return <td key={index} />
                        })}
                    </tr>
                })}
                </tbody>
            </table>
            <div>Срок</div>
            <div className={classes.input_container}>
                <div className={classes.date_inp}
                     contentEditable
                     suppressContentEditableWarning="true">
                    {new Date(selectedDate.getFullYear(), selectedDate.getMonth(),selectedDate.getDate()+1).toISOString().split('T')[0]}
                </div>
                <input className={classes.date_inp1}
                       value={temporaryTime}
                     contentEditable
                     onChange={(e)=> changeTime(e)}
                     suppressContentEditableWarning="true">
                </input>
            </div>
            <FormButtonComponent click={()=>saveDateHandler(temporaryTime)} val={'Сохранить'} bg={'#0079BF'} color={'white'}/>
        </div>
    );
};

export default CalendarComponent;