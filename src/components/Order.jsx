/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'netx/image';
import arrow from '@icons/flechita.svg';
import styles from  '@styles/Order.module.scss';

const Order = () => {
  return (
    <div className={styles.Order}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={arrow} alt='arrow' />
    </div>
  );
};

export default Order;
