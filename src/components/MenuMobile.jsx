/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
// import '@styles/MenuMobile.scss';
import styles from '@styles/MenuMobile.module.scss';

const MenuMobile = () => {
  const { handleToogleMenuMobile } = useContext(AppContext);

  return (
    <div className={styles.MenuMobile}>
      <div className={styles.categories}>
        <div className={styles.close}>
          <Image src={close} alt='close' onClick={() => handleToogleMenuMobile()} />
        </div>
        <ul>
          <li><Link href="/">CATEGORIES</Link></li>
          <li><Link href="/">All</Link></li>
          <li><Link href="/">Clothes</Link></li>
          <li><Link href="/">Electronics</Link></li>
          <li><Link href="/">Furnitures</Link></li>
          <li><Link href="/">Toys</Link></li>
          <li><Link href="/">Others</Link></li>
        </ul>
      </div>
      <div className={styles['my-section1']}>
        <ul>
          <li><Link href="/">My orders</Link></li>
          <li><Link href="/">My account</Link></li>
        </ul>
      </div>
      <div className={styles['my-section2']}>
        <ul>
          <li><Link href="/">camilayokoo@gmail.com</Link></li>
          <li><Link href="/">Sign out</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
