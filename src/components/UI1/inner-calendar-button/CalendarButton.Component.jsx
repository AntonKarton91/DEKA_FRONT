import React from 'react';
import  '../../../styles/UI-styles.scss';
import cnBind from "classnames/bind";
import classes from '../../../styles/UI1-styles.css';

const cx = cnBind.bind(classes)

const CalendarButtonComponent = ({val, isActive, clickHandler}) => {
    const cls = cx('date', {activeDate: isActive})

    return (
            <td className={cls} onClick={clickHandler}>
                {val}
            </td>

    );
};

export default CalendarButtonComponent;