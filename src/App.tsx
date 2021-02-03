import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import Users from './secure/users/Users';
import UserCreate from './secure/users/UserCreate';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import UserEdit from './secure/users/UserEdit';
import Roles from './secure/roles/Roles';
import RoleCreate from './secure/roles/RoleCreate';
import RoleEdit from './secure/roles/RoleEdit';
import Products from './secure/products/Products';
import ProductCreate from './secure/products/ProductCreate';
import ProductEdit from './secure/products/ProductEdit';
import Orders from './secure/orders/Orders';
import OrderItems from './secure/orders/OrderItems';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={RedirectToDashboard} />
        <Route path={'/dashboard'} exact component={Dashboard} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/users/create'} component={UserCreate} />
        <Route path={'/users/:id/edit'} component={UserEdit} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path={'/roles'} exact component={Roles} />
        <Route path={'/roles/create'} component={RoleCreate} />
        <Route path={'/roles/:id/edit'} component={RoleEdit} />
        <Route path={'/products'} exact component={Products} />
        <Route path={'/products/create'} exact component={ProductCreate} />
        <Route path={'/products/:id/edit'} exact component={ProductEdit} />
        <Route path={'/orders'} exact component={Orders} />
        <Route path={'/orders/:id'} exact component={OrderItems} />
      </BrowserRouter>
    </div>
  );
}

export default App;
