import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { User } from '../../classes/user';
import { Link } from 'react-router-dom';
import Paginator from '../components/Paginator';
import Deleter from '../components/Deleter';
import { connect } from 'react-redux';

class Users extends Component<{ user: User }> {
  state = { users: [] };
  page = 1;
  lastPage = 0;

  componentDidMount = async () => {
    const response = await axios.get(`/users?page=${this.page}`);
    this.setState({
      users: response.data.data,
    });
    this.lastPage = response.data.meta.last_page;
  };

  handlePageChange = async (page: number) => {
    this.page = page;

    await this.componentDidMount();
  };

  handleDelete = async (id: number) => {
    this.setState({
      users: this.state.users.filter((user: User) => user.id !== id),
    });
  };

  renderUserActions = (id: number) => {
    return this.props.user.canEdit('users') ? (
      <div className="btn-group mr-2">
        <Link
          to={`/users/${id}/edit`}
          className="btn btn-sm btn-outline-secondary"
        >
          Edit
        </Link>
        <Deleter id={id} endpoint="/users" handleDelete={this.handleDelete} />
      </div>
    ) : null;
  };

  renderAddButton = () => {
    return this.props.user.canEdit('users') ? (
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/users/create" className="btn btn-sm btn-outline-secondary">
            Add
          </Link>
        </div>
      </div>
    ) : null;
  };

  render() {
    return (
      <Wrapper>
        {this.renderAddButton()}

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user: User) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      {user.first_name} {user.last_name}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role.name}</td>
                    <td>{this.renderUserActions(user.id)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Paginator
          lastPage={this.lastPage}
          handlePageChange={this.handlePageChange}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Users);
