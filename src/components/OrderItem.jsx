/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        {/* <Image src={product?.images[0]} alt={product?.title} width={50} height={50} /> */}
        {product?.images[0] && <Image src={product?.images[0]} alt={product?.title} width={50} height={50}/> }
        <p>{product?.title}</p>
      </figure>
      <div>
        <p>
          ${product?.price}
        </p>
        <Image src={close} alt='close' onClick={() => handleRemove(product)} />
      </div>
    </div>

  );
};

export default OrderItem;
