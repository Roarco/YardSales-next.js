/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import '../styles/SendEmail.scss';

const SendEmail = () => {
  return (
    <div className='SendEmail'>
      <div className='SendEmail__form-container'>
        <img className='SendEmail__img' src={logo} alt='logo' />
        <h1 className='SendEmail__title'>Email has been sent!</h1>
        <p className='SendEmail__subtitle'>Plase check your inbox for istructions on how to reset the password</p>
        <div className='email'>
          <img src={email} alt='Email' className='email__img' />
        </div>
        <button className='email__button'>Login</button>
        <p className='resend'>
          <span>Didn't receive the email?</span>
          <a href='/'>Resend</a>
        </p>
      </div>
    </div>

  );
};

export default SendEmail;
