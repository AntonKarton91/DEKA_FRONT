import React, {useState} from 'react';
import classes from '../../task_popup.module.css'


const PopupLogo = ({foo, srcLogo, id}) => {

    function func(id)
        {foo(id)}

    return (
        <img className={classes.popup_part_logo} src={ srcLogo } alt="" onClick={()=>func(id)}/>
    )
    

}
    

export default PopupLogo;