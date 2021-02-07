import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { User } from '../../classes/user';

class Menu extends Component<{ user: User }> {
  menuItems = [
    {
      link: '/users',
      name: 'Users',
    },
    {
      link: '/roles',
      name: 'Roles',
    },
    {
      link: '/products',
      name: 'Products',
    },
    {
      link: '/orders',
      name: 'Orders',
    },
  ];

  render() {
    let menu: JSX.Element[] = [];
    this.menuItems.forEach((item) => {
      if (this.props.user.canView(item.name.toLowerCase())) {
        menu.push(
          <li className="nav-item" key={item.name}>
            <NavLink to={item.link} className="nav-link">
              {item.name}
            </NavLink>
          </li>
        );
      }
    });

    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item" key="Dashboard">
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </li>

            {menu}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Menu);
