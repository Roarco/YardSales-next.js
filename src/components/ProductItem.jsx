/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import Image from 'next/image';
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
      {/* <Image src={product.images[0]} alt={product.title} width="100%" height="100%" /> */}
      {product?.images[0] && <Image src={product?.images[0]} alt={product?.title} width={240} height={240} />}
      <div className={styles['product-info']}>
        <div>
          <p>
            {'$ '}
            {product?.price}
          </p>
          <p>{product?.title}</p>
        </div>
        <figure>
          { state.cart.includes(product) ? <Image src={added} alt='added' className={styles.added} onClick={() => removeFromCart(product)} /> : <Image src={add} alt='add' onClick={() => addToCar(product)} />}
        </figure>
      </div>
    </div>

  );
};

export default ProductItem;
