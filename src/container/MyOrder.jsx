/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';

const MyOrder = () => {

  const { state, handleToogleOrders } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acucumulator, currentValue) => acucumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img src={arrow} alt='arrow' onClick={() => handleToogleOrders()} />
        <p className='MyOrder-title'>My order</p>
      </div>
      <div className='my-order-content'>
        {state.cart.map((product) => (<OrderItem product={product} key={`orderItem-${product.id}`} />))}
      </div>
      <div className='order'>
        <p>
          <span>Total</span>
        </p>
        <p>
          $
          {sumTotal()}
        </p>
      </div>
      <button className='primary-button'>
        Checkout
      </button>
    </aside>
  );
};

export default MyOrder;
