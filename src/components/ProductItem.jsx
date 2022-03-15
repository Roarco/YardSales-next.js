/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import add from '@icons/bt_add_to_cart.svg';
import added from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCar, removeFromCart } = useContext(AppContext);

  /*  const handleClick = (item) => {
    addToCar(item);
  }; */
  return (
    <div className={styles.ProductItem}>
      <img src={product.images[0]} alt={product.title} width="100%" height="100%" />
      <div className={styles['product-info']}>
        <div>
          <p>
            {'$ '}
            {product.price}
          </p>
          <p>{product.title}</p>
        </div>
        <figure>
          { state.cart.includes(product) ? <img src={added} alt='added' className={styles.added} onClick={() => removeFromCart(product)} /> : <img src={add} alt='add' onClick={() => addToCar(product)} />}
        </figure>
      </div>
    </div>

  );
};

export default ProductItem;
