import React, {forwardRef} from 'react';
import {Box, createTheme, styled, TextField} from '@mui/material';
// import {makeStyles} from '@mui/material';
import { colors } from '@mui/material'
import {yellow} from "@mui/material/colors";

const style = {
    '.css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.6)'
    },
    '.css-1x51dt5-MuiInputBase-input-MuiInput-input': {
        color: 'rgba(255, 255, 255, 0.6)'
    },
    '.css-1ptx2yq-MuiInputBase-root-MuiInput-root:after': {
        borderBottom: '2px solid rgba(255, 255, 255, 0.6)'
    },
    '.css-1ptx2yq-MuiInputBase-root-MuiInput-root:before': {
        borderBottom: '2px solid rgba(255, 255, 255, 0.2)'
    },
    '.css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
        color: 'white'
    },
    '.css-1c2i806-MuiFormLabel-root-MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.6)'
    }
}

const InputComponent = forwardRef((props, ref) => {
    return (
        <TextField sx={style} inputRef={ref} variant="standard" {...props}/>

    );
});

export default InputComponent;








