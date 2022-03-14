/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className='CreateAccount'>
      <div className='CreateAccount__form-container'>
        <h1 className='CreateAccount__title'>My account</h1>
        <form action='/' className='CreateAccount__form'>
          <div>
            <label htmlFor='name' className='CreateAccount__name'>Name</label>
            <input type='text' id='name' placeholder='Camila Yokoo' className='input input-name' />
            <label htmlFor='email' className='CreateAccount__email'>Email address</label>
            <input type='text' id='email' placeholder='camilayokoo@gmail.com' className='input input-email' />
            <label htmlFor='password' className='CreateAccount__password '>Password</label>
            <input type='password' id='password' placeholder='**************' className='input input-password' />
          </div>
          <input type='submit' value='Create' className='CreateAccount__button primary-button' />
        </form>
      </div>
    </div>

  );
};

export default CreateAccount;
