import React, {useState} from 'react';
import classes from "./desription-styles.module.css";
import {Button} from "@mui/material";

const EditDescriptionComponent = ({saveBody, initBody}) => {
    const [body, setBody] = useState(initBody)

    console.log(initBody, 'initBody')
    function set(e){
        console.log(e.target.value)
        setBody(e.target.value)
    }


    return (
        <>
            <input type='textarea' className={classes.desription_window} value={body} onChange={event => set(event)}/>
            <Button variant="contained" onClick={() => saveBody(body)}>Сохранить</Button>
        </>
    );
}

export default EditDescriptionComponent;