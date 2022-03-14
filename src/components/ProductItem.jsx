/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';

import add from '@icons/bt_add_to_cart.svg';
import added from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
  const { state, addToCar, removeFromCart } = useContext(AppContext);

  /*  const handleClick = (item) => {
    addToCar(item);
  }; */
  return (
    <div className='ProductItem'>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>
            {'$ '}
            {product.price}
          </p>
          <p>{product.title}</p>
        </div>
        <figure>
          { state.cart.includes(product) ? <img src={added} alt='added' className='added' onClick={() => removeFromCart(product)} /> : <img src={add} alt='add' onClick={() => addToCar(product)} />}
        </figure>
      </div>
    </div>

  );
};

export default ProductItem;
