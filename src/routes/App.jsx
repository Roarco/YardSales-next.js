/* eslint-disable import/no-unresolved */

/* este archivo es una mejor forma de trabajar nuestros componetentes,
ya que aqui los estamos conteniendo en un contenedor
*/
/*
aqui vamos a importar todos los componetentes,
para  asi tener un contenedor principal con cada,
uno de ellos
*/
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@container/Layout';
import Home from '@templates/Home';
import Login from '@templates/Login';
import PasswordRecovery from '@templates/PasswordRecovery';
import SendEmail from '@templates/SendEmail';
import NewPassword from '@templates/NewPassword';
import MyAccount from '@templates/MyAccount';
import CreateAccount from '@templates/CreateAccount';
import Checkout from '@templates/Checkout';
import Orders from '@templates/Orders';
import NotFound from '@templates/NotFound';
import AppContext from '@context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/Global.scss';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/password-recovery' component={PasswordRecovery} />
            <Route exact path='/send-email' component={SendEmail} />
            <Route exact path='/new-password' component={NewPassword} />
            <Route exact path='/account' component={MyAccount} />
            <Route exact path='/signup' component={CreateAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/orders' component={Orders} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
