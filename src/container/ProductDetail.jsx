/* eslint-disable import/no-unresolved */
import React from 'react';
import close from '@icons/icon_close.png';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside className='ProductDetail'>
      <div className='ProductDetail-close'>
        <img src={close} alt='close' />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
