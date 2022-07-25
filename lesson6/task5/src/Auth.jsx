import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    loginStatus: 'logout',
  };

  handleLogin = () => {
    this.setState({
      loginStatus: 'load',
    });

    setTimeout(() => {
      this.setState({
        loginStatus: 'login',
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      loginStatus: 'logout',
    });
  };

  render() {
    if (this.state.loginStatus === 'load') {
      return (
        <div className="status">
          <Spinner size={35} />
        </div>
      );
    }

    return (
      <div className="status">
        {this.state.loginStatus === 'logout' ? (
          <Login onLogin={this.handleLogin} />
        ) : (
          <Logout onLogout={this.handleLogout} />
        )}
      </div>
    );
  }
}

export default Auth;
