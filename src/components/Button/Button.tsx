import React from 'react';
import Button from '@mui/material/Button';

export const NousContacterButton = (): JSX.Element => {
    return (
        <Button variant="contained" sx={{
            borderRadius: 20,
            color: 'white', 
            backgroundColor: 'green', 
            '&:hover': {
                backgroundColor: 'darkgreen', 
            },
        }}>
            Nous contacter
        </Button>
    );
};


