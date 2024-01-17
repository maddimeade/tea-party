import { useReducer, createContext } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from '../atoms/Constants';

//useContext


//useReducer

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
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <TeaShopContext.Provider value={{ cartState, dispatch }}>
      {children}
    </TeaShopContext.Provider>
  );
};

export { TeaShopContext, TeaShopProvider };
