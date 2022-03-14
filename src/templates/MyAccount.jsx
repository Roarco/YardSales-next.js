/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className='MyAccount'>
      <div className='MyAccount__form-container'>
        <h1 className='MyAccount__title'>My account</h1>
        <form action='/' className='MyAccount__form'>
          <div>
            <label htmlFor='name'>Name</label>
            <p id='name'>Camila Yokoo</p>
            <label htmlFor='email'>Email address</label>
            <p id='email'>camilayokoo@gmail.com</p>
            <label htmlFor='password'>Password</label>
            <p id='password'>**************</p>
          </div>
          <input type='submit' value='Edit' className='MyAccount__button secundary-button' />
        </form>
      </div>
    </div>

  );
};

export default MyAccount;
