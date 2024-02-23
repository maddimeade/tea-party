import { useReducer, createContext } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from '../atoms/Constants';

//useContext
//The context object is created in this file
//The TeaShopContext.Provider is passing cartState and dispatch to its children without having to pass through props
//We export the Context and Provider to be used elsewhere in the app

//useReducer
//cartReducer specifies how the state should be updated in different scenarios
//useReducer takes a cartReducer and an initial state
//It returns an array with two elements: cartState and a dispatch function.

const TeaShopContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

const TeaShopProvider = ({ children }) => {
  const [cartState, updateCartDispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <TeaShopContext.Provider value={{ cartState, updateCartDispatch }}>
      {children}
    </TeaShopContext.Provider>
  );
};

export { TeaShopContext, TeaShopProvider };
