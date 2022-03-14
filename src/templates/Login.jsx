
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '../styles/Login.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      userName: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };
  return (
    <div className='Login'>
      <div className='Login__form-container'>
        <img className='Login__img' src={logo} alt='logo' />
        <form action='/' className='Login__form' ref={form}>
          <label htmlFor='email' className='Login__email'>Email address</label>
          <input type='text' name='email' placeholder='camilayokoo@gmail.com' className='input input-email' />
          <label htmlFor='password' className='Login__password'>Password</label>
          <input type='password' name='password' placeholder='**************' className='input input-password' />
          <button className='Login__button primary-button' onClick={handleSubmit}>Log in </button>
          <a href='/'>Forgot my password</a>
        </form>
        <button className='second-button'>Sign up</button>
      </div>
    </div>

  );
};

export default Login;
