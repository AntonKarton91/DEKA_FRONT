import React from 'react';
import classes from "./register_page.module.css";
const RegisterFormComponent = ({children, ...props}) => {
    return (
        <form noValidate className={classes.form} {...props}>
            {children}
        </form>
    );
};

export default RegisterFormComponent;