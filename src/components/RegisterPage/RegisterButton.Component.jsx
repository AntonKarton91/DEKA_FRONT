import React from 'react';
import {Button, makeStyles} from "@mui/material";


const RegisterButtonComponent = ({children, props}) => {
    return (
        <Button  type='submit' variant='contained' {...props}>
            {children}
        </Button>
    );
};

export default RegisterButtonComponent;