import React, {useState} from 'react';
import classes from "./desription-styles.module.css";

const EditDescriptionComponent = React.forwardRef((props, ref) => {
    const [body, setBody] = useState(props.initBody)

    function set(e){
        setBody(e.target.value)
        console.log(e.target.value)
    }


    return (
        <input type='textarea' className={classes.desription_window} ref={ref} value={body} onChange={event => set(event)}/>
    );
})

export default EditDescriptionComponent;