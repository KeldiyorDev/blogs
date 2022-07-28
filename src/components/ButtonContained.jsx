import React from 'react';
import Button from '@mui/material/Button';

const ButtonContained = ({ name }) => {
    return (
        <Button variant="contained">{name}</Button>
    );
}

export default ButtonContained;
