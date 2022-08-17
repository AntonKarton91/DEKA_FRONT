import React from 'react';
import classes from './MyButton.module.css'

const Button = (props) => {

    // let classList = {classes.formButton}

    function addClasses(){

    }

    return (
        <button onClick = {props.onClick} className={classes.formButton}>
            {props.children}
        </button>
    );
};

export default Button;