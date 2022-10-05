import React from 'react';
import {MONTH} from "../../../tools/constants";
import classes from './date-preview.module.css'
const DatePreviewComponent = ({date}) => {
    function foo () {
        if (date){
            date = new Date(date)
            return `${date.getDate()} ${MONTH[date.getMonth()].slice(0, 3)}`
        } else return null
    }

    return (
        <div className={classes.date_preview}>
            {foo ()}
        </div>
    );
};

export default DatePreviewComponent;