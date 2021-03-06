/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import OrderItem from '@components/OrderItem';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {

  const { state, handleToogleOrders } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acucumulator, currentValue) => acucumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={arrow} alt='arrow' onClick={() => handleToogleOrders()} />
        <p className={styles['MyOrder-title']}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product) => (<OrderItem product={product} key={`orderItem-${product.id}`} />))}
      </div>
      <div className={styles.order}>
        <p>
          <span>Total</span>
        </p>
        <p>
          $
          {sumTotal()}
        </p>
      </div>

      <div className={styles['primary-button']} >
      <Link href="/checkout">
        Checkout
      </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
