import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';

    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let usersList = this.props.users.slice(); // !!! don't property mutation

    if (this.state.sorting) {
      usersList.sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>

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
