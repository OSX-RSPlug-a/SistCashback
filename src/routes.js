import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './componentes/Login/Login'

import New from './componentes/New'

import Dashboard from './componentes/Dashboard'

import ListCompras from './componentes/ListCompras'

import CadCompras from './componentes/CadCompras'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/new" component={New} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/listCompras" component={ListCompras} />
        <Route path="/cadCompras" component={CadCompras} />
      </Switch>
    </BrowserRouter>
  );
}