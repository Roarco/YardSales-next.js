/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '../styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <div className='NewPassword'>
      <div className='NewPassword__form-container'>
        <img className='NewPassword__img' src={logo} alt='logo' />
        <h1 className='NewPassword__title'>Create a new password</h1>
        <p className='NewPassword__subtitle'>Enter a new password for your account</p>
        <form action='/' className='NewPassword__form'>
          <label htmlFor='password' className='NewPassword__password'>Password</label>
          <input type='password' id='password' placeholder='**************' className='input input-password' />
          <label htmlFor='re-enter-password' className='NewPassword__password NewPassword__re-enter-password'>Re-enter password</label>
          <input type='password' id='re-enter-password' placeholder='**************' className='input input-re-enter password' />
          <input type='submit' value='Confirm' className='NewPassword__button primary-button' />
        </form>
      </div>
    </div>

  );
};

export default NewPassword;
