/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import ProductInfo from '../components/ProductInfo';
import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles['ProductDetail-close']}>
        <Image src={close} alt='close' />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
