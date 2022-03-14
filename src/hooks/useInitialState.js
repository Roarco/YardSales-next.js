import { useState } from 'react';

const initialState = {
  cart: [],
  toogleMenu: false,
  toogleMenuMobile: false,
  orderIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCar = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload) ?
        state.cart :
        [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const handleToogleMenu = () => {
    setState({
      ...state,
      toogleMenu: !state.toogleMenu,
    });
  };

  const handleToogleMenuMobile = () => {
    setState({
      ...state,
      toogleMenuMobile: !state.toogleMenuMobile,
    });
  };

  const handleToogleOrders = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  return {
    state,
    addToCar,
    removeFromCart,
    handleToogleOrders,
    handleToogleMenu,
    handleToogleMenuMobile,
  };
};

export default useInitialState;

