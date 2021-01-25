import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './secure/components/Nav';
import Menu from './secure/components/Menu';
import Dashboard from './secure/Dashboard';
import Users from './secure/Users';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />

      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <BrowserRouter>
              <Route path={'/'} exact component={Dashboard} />
              <Route path={'/users'} component={Users} />
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
