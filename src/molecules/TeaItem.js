import React, { useState, useContext } from 'react';
import { TeaShopContext } from './TeaShopProvider';
import { ADD_TO_CART } from '../atoms/Constants';
import CustomImageButton from '../atoms/CustomImageButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const TeaItem = ({ tea }) => {
  const { cartState, dispatch } = useContext(TeaShopContext);
  const [count, setCount] = useState(1);

  // Check if the tea item is already in the cart
  const isInCart = cartState.cart.some((item) => item.id === `${tea.id}`);

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: { id: `${tea.id}`, tea, count } });
  };

  return (
    <Card style={{ backgroundColor: '#FDE9EA' }}>
      <CardContent>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={6}>
            <Typography variant='h6'>{tea.name}</Typography>
            <Typography variant='subtitle1'>${tea.price.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type='number'
              label='Count'
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value, 10)))}
              fullWidth
            />
          </Grid>
          <Grid item xs={3} container justifyContent='flex-end'>
            <Grid item>
              <CustomImageButton
                imagePath={tea.pathToImage}
                onClick={addToCart}
                disabled={isInCart} // Disable the button if the item is in the cart
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TeaItem;
