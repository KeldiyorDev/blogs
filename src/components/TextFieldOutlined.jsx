import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldOutlined = ({ name }) => {
    return (
        <TextField id="outlined-basic" label={name} variant="outlined" />
    );
}

export default TextFieldOutlined;
