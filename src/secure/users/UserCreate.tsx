import React, { Component, SyntheticEvent } from 'react';
import axios from 'axios';
import Wrapper from '../Wrapper';
import { Role } from '../../classes/role';
import { Redirect } from 'react-router-dom';

class UserCreate extends Component {
  state = {
    roles: [],
    redirect: false,
  };
  firstName = '';
  lastName = '';
  email = '';
  roleId = -1;

  componentDidMount = async () => {
    const response = await axios.get('/roles');

    this.setState({
      roles: response.data.data,
    });
  };

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post('/users', {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      role_id: this.roleId,
    });

    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/users" />;
    }

    return (
      <Wrapper>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              onChange={(e) => (this.firstName = e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              onChange={(e) => (this.lastName = e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={(e) => (this.email = e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              name="role_id"
              className="form-control"
              onChange={(e) => (this.roleId = parseInt(e.target.value))}
            >
              <option>Select Role</option>
              {this.state.roles.map((role: Role) => {
                return (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                );
              })}
            </select>
          </div>

          <button className="btn btn-outline-secondary">Save</button>
        </form>
      </Wrapper>
    );
  }
}

export default UserCreate;
