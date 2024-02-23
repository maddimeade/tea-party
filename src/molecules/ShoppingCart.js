import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { REMOVE_FROM_CART } from '../atoms/Constants';
import { TeaShopContext } from './TeaShopProvider';

//useEffect
//used in this file to rerender every time the cart changes, and updates the total price

//useState
//used in this file to change and display the cart total

const ShoppingCart = () => {
  const { cartState, updateCartDispatch } = useContext(TeaShopContext);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cartState.cart.reduce(
      (acc, item) => acc + item.tea.price * item.count,
      0
    );
    setCartTotal(total);
  }, [cartState.cart]);

  const handleRemoveFromCart = (teaId) => {
    updateCartDispatch({ type: REMOVE_FROM_CART, payload: { id: `${teaId}` } });
  };

  return (
    <Card
      style={{
        maxWidth: 400,
        margin: 'auto',
        backgroundColor: '#F1B6AC',
        color: '#123524',
      }}>
      <CardContent>
        <Typography variant='h5' gutterBottom>
          Shopping Cart
        </Typography>
        <List>
          {cartState.cart.map((item) => (
            <ListItem key={item.tea.id} style={{ display: 'flex' }}>
              <Typography variant='subtitle1' style={{ flexGrow: 1 }}>
                {item.tea.name} - ${item.tea.price.toFixed(2)} x {item.count}
              </Typography>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                onClick={() => handleRemoveFromCart(item.tea.id)}
                style={{ backgroundColor: '#869F77' }}>
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
        <Typography variant='h6' style={{ marginTop: 20 }}>
          Total: ${cartTotal.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShoppingCart;
