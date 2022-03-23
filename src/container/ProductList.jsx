/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import useGetProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';
import AppContext from '@context/AppContext';
import MenuMobile from '@components/MenuMobile.jsx';
import styles from '@styles/ProductList.module.scss';

// const API = process.env.REACT_APP_API_URL;
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  const { state } = useContext(AppContext);

  return (
    <section className={styles['main-container']}>
      {(state.toogleMenuMobile) ? null : (
        <div className={styles.ProductList}>
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      )}
      {state.toogleMenuMobile && <MenuMobile />}
    </section>
  );
};

export default ProductList;
