import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  handleFilter = e => {
    e.preventDefault();
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    let usersList = this.props.users
      .slice()
      .filter(user => user.name.toUpperCase().includes(this.state.filterText.toUpperCase()));

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={usersList.length}
          onChange={this.handleFilter}
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
