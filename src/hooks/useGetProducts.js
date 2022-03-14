/* eslint-disable import/no-extraneous-dependencies */
/* aqui vamos a implementar el react hook  */
import { useState, useEffect } from 'react';
import axios from 'axios';

/* creamos una funcion que nos permitira manejar el estado y el ciclo de vida de cualquier componente
de nuestra aplicacion, por que la vamos a poder utilizar donde sea necesario.
*/

const useGetProducts = (API) => {
  //useState
  const [products, setProducts] = useState([]);

  //useEffect
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);
  return products;
};

export default useGetProducts;
