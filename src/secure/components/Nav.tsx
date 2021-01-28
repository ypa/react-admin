import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Nav extends Component {
  state = { redirect: false };

  handleSignOut = async () => {
    await axios.post('/logout', {});

    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
          Company name
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#" onClick={this.handleSignOut}>
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
