import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <main className='NotFound'>
      <div className='NotFound__container'>
        <p className='NotFound-title animated bounce'>404</p>
        <p>Page not found</p>
      </div>
    </main>
  );
};

export default NotFound;
