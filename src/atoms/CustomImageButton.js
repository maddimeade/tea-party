import React from 'react';
import Button from '@mui/material/Button';

const CustomImageButton = ({ imagePath, onClick }) => {
  return (
    <Button onClick={onClick}>
      <input type='file' style={{ display: 'none' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <img
          src={imagePath}
          alt='Add to Cart'
          style={{ width: '75px', height: '75px', objectFit: 'cover' }}
        />
        <span>Add to Cart</span>
      </div>
    </Button>
  );
};

export default CustomImageButton;
