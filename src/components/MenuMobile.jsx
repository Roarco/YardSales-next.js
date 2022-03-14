/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import '@styles/MenuMobile.scss';

const MenuMobile = () => {
  const { handleToogleMenuMobile } = useContext(AppContext);

  return (
    <div className='MenuMobile'>
      <div className='categories'>
        <div className='close'>
          <img src={close} alt='close' onClick={() => handleToogleMenuMobile()} />
        </div>
        <ul>
          <li><a href='/'>CATEGORIES</a></li>
          <li><a href='/'>All</a></li>
          <li><a href='/'>Clothes</a></li>
          <li><a href='/'>Electronics</a></li>
          <li><a href='/'>Furnitures</a></li>
          <li><a href='/'>Toys</a></li>
          <li><a href='/'>Others</a></li>
        </ul>
      </div>
      <div className='my-section1'>
        <ul>
          <li><a href='/'>My orders</a></li>
          <li><a href='/'>My account</a></li>
        </ul>
      </div>
      <div className='my-section2'>
        <ul>
          <li><a href='/'>camilayokoo@gmail.com</a></li>
          <li><a href='/'>Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
