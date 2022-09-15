import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

// Refactoring

// REACT APPROACH
// https://reactjs.org/docs/thinking-in-react.html
// 0. make a layout (html, css)
// 1. divide into components
// 2. build static version in React
// 3. which props vs which state
// 4. implement logic (80% - JS, 20% - React) - (JS Algo)

// state
// page - !!! в state параметры которые изменяются
// userPerPage  - !!! лучше віносить в конфиг файл или const в коде, т.к.

// props
// [users]

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };
  }

  handleNextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  handlePrevPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const usersPerPage = 3;

    const { users } = this.props;
    const { currentPage } = this.state;

    const indexLastUser = currentPage * usersPerPage;
    const usersList = users.slice(indexLastUser - usersPerPage, indexLastUser);

    return (
      <div>
        <Pagination
          goNext={this.handleNextPage}
          goPrev={this.handlePrevPage}
          currentPage={currentPage}
          usersCount={users.length}
          usersPerPage={usersPerPage}
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

// Old solution - Bad

// class UsersList extends Component {
//   constructor(props) {
//     super(props);
//     if (props.users.length === 0) {
//       this.state = {
//         totalUsers: 0,
//       };
//       return;
//     }
//     this.state = {
//       totalUsers: props.users.length,
//       page: 1,
//       userPerPage: 3,
//     };
//   }

//   handleNextPage = () => {
//     this.setState({
//       page: this.state.page + 1,
//     });
//   };

//   handlePrevPage = () => {
//     this.setState({
//       page: this.state.page - 1,
//     });
//   };

//   render() {
//     let usersList = this.props.users.slice(
//       (this.state.page - 1) * this.state.userPerPage,
//       this.state.userPerPage * this.state.page,
//     );

//     return (
//       <div>
//         <Pagination
//           goNext={this.handleNextPage}
//           goPrev={this.handlePrevPage}
//           currentPage={this.state.page}
//           totalItems={this.state.totalUsers}
//           itemsPerPage={this.state.userPerPage}
//         />
//         <ul className="users">
//           {usersList.map(user => (
//             <User key={user.id} {...user} />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
