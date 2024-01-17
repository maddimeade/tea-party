import React, { useState, useCallback } from 'react';
import { TeaShopProvider } from '../molecules/TeaShopProvider';
import ShoppingCart from '../molecules/ShoppingCart';
import TeaMenu from '../molecules/TeaMenu';
import ShoppingCartButton from '../atoms/ShoppingCartButton';

//useState 

const PointOfSalePage = () => {
  console.log('PointOfSalePage rendered');
  const [showCart, setShowCart] = useState(true);

  const toggleCart = useCallback(() => {
    setShowCart((prevShowCart) => !prevShowCart);
  }, []);

  return (
      <TeaShopProvider>
        <div>
          <ShoppingCartButton onClick={toggleCart}></ShoppingCartButton>
          {showCart && <ShoppingCart />}
          <TeaMenu />
        </div>
      </TeaShopProvider>
  );
};

export default PointOfSalePage;
