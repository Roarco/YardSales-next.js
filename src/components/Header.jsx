/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@container/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import cart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, handleToogleMenu, handleToogleMenuMobile, handleToogleOrders } = useContext(AppContext);

  return (
    <nav className={styles.navbar}>
      <Image src={menu} alt='menu' className={styles.menu} onClick={() => handleToogleMenuMobile()} />
      <div className={styles['navbar-left']}>
        <Link href='/'>
          <Image src={logo} alt='logo' className={styles['navbar-lef-logo']} />
        </Link>
        <ul>
          <li><a href='/'>All</a></li>
          <li><a href='/'>Clothes</a></li>
          <li><a href='/'>Electronics</a></li>
          <li><a href='/'>Furniture</a></li>
          <li><a href='/'>Toys</a></li>
          <li><a href='/'>Others</a></li>
        </ul>
      </div>
      <div className={styles['navbar-rigth']}>
        <ul>
          <li onClick={() => handleToogleMenu()}>camilayakoo@gmail.com</li>
          <li className={styles['navbar-shopping-cart']} onClick={() => handleToogleOrders()}>
            <Image src={cart} alt='cart' />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      { state.toogleMenu && <Menu />}
      { state.orderIsOpen && <MyOrder />}
    </nav>

  );
};

export default Header;
