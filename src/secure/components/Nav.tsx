import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { User } from '../../classes/user';

class Nav extends Component<{ user: User }> {
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
        <ul className="my-2 my-md-0 mr-md3">
          <Link to="/profile" className="p-2 text-white">
            {this.props.user.first_name} {this.props.user.last_name}
          </Link>
          <a className="p-2 text-white" href="#" onClick={this.handleSignOut}>
            Sign out
          </a>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Nav);
