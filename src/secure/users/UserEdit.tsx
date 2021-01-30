import React, { Component, PropsWithRef, SyntheticEvent } from 'react';
import axios from 'axios';
import Wrapper from '../Wrapper';
import { Role } from '../../classes/role';
import { Redirect } from 'react-router-dom';
import { User } from '../../classes/user';

class UserEdit extends Component<{ match: PropsWithRef<any> }> {
  state = {
    roles: [],
    firstName: '',
    lastName: '',
    email: '',
    roleId: -1,
    redirect: false,
  };
  id = -1;
  firstName = '';
  lastName = '';
  email = '';
  roleId = -1;

  componentDidMount = async () => {
    this.id = this.props.match.params.id;
    const rolesCall = await axios.get('/roles');

    const userCall = await axios.get(`/users/${this.id}`);
    const user: User = userCall.data.data;

    this.setState({
      roles: rolesCall.data.data,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      roleId: user.role.id,
    });

    console.log(this.id);
  };

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.put(`/users/${this.id}`, {
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
              defaultValue={(this.firstName = this.state.firstName)}
              onChange={(e) => (this.firstName = e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              defaultValue={(this.lastName = this.state.lastName)}
              onChange={(e) => (this.lastName = e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              defaultValue={(this.email = this.state.email)}
              onChange={(e) => (this.email = e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              name="role_id"
              className="form-control"
              value={(this.roleId = this.state.roleId)}
              onChange={(e) => {
                this.roleId = parseInt(e.target.value);
                this.setState({
                  roleId: this.roleId,
                });
              }}
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

export default UserEdit;
