/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import '../styles/OrderItem.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className='OrderItem'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
        <p>{product.title}</p>
      </figure>
      <div>
        <p>
          ${product.price}
        </p>
        <img src={close} alt='close' onClick={() => handleRemove(product)} />
      </div>
    </div>

  );
};

export default OrderItem;
