import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCartButton = ({ onClick }) => {
  return (
    <IconButton color='#123524' onClick={onClick} >
      <ShoppingCartIcon />
    </IconButton>
  );
};

export default ShoppingCartButton;
