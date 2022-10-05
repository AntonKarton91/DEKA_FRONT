import React from 'react';
import  '../../../styles/UI-styles.scss'


const FormButtonComponent = ({val, bg, color, click}) => {

    return (
        <div style={{
            backgroundColor: bg,
            color: color,
        }} className={'form_button'} onClick={click}>
            {val}
        </div>
    );
};

export default FormButtonComponent;