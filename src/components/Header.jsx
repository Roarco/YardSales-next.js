/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      <img src={menu.src} alt='menu' className={styles.menu} onClick={() => handleToogleMenuMobile()} />
      <div className={styles['navbar-left']}>
        <Link href='/' passHref>
          <Image src={logo} alt='logo' className={styles['navbar-lef-logo']} />
        </Link>
        <ul>
          <li><Link href="/">All</Link></li>
          <li><Link href="/">Clothes</Link></li>
          <li><Link href="/">Electronics</Link></li>
          <li><Link href="/">Furniture</Link></li>
          <li><Link href="/">Toys</Link></li>
          <li><Link href="/">Others</Link></li>
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
