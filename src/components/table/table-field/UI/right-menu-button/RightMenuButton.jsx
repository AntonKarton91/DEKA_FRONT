import React, {useState} from 'react';
import classes from './right-menu-button.module.css';


const RightMenuButton = ({icon, name}) => {

    return (
        <div className={classes.button}>
            <span className="material-symbols-outlined ">
                {icon}
            </span>
            <span className={classes.button_text}>{name}</span>
        </div>
    )
    

}
    

export default RightMenuButton;