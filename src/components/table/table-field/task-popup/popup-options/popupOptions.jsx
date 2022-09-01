import React, {useState} from 'react';
import classes from '../task_popup.module.css';
import PopupPartList from './popup_partlist/PopupPartList';


const PopupOptions = ({}) => {
   

    return (
        <div className={classes.popup_options}>
            <PopupPartList/>
            {/* <PopupMarkList/> */}
            {/* <PopupDate/>     */}
        </div>
    )
    

}
    

export default PopupOptions;