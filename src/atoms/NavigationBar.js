import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar className="toolbar">
        <Typography variant='h6'>Maddi's Tea Shop</Typography>
        <Button color='inherit' href='/'>
          Point Of Sale
        </Button>
        <Button color='inherit' href='/reservation'>
          Reservations
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
