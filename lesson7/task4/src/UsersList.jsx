import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    if (props.users.length === 0) {
      this.state = {
        totalUsers: 0,
      };
      return;
    }
    this.state = {
      totalUsers: props.users.length,
      page: 1,
      userPerPage: 3,
    };
  }

  handleNextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  handlePrevPage = () => {
    this.setState({
      page: this.state.page - 1,
    });
  };

  render() {
    let usersList = this.props.users.slice(
      (this.state.page - 1) * this.state.userPerPage,
      this.state.userPerPage * this.state.page,
    );

    return (
      <div>
        <Pagination
          goNext={this.handleNextPage}
          goPrev={this.handlePrevPage}
          currentPage={this.state.page}
          totalItems={this.state.totalUsers}
          itemsPerPage={this.state.userPerPage}
        />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
