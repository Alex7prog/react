import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

const Auth = () => {
  const [loginStatus, setLoginStatus] = useState('logout');

  const handleLogin = () => {
    setLoginStatus('load');

    setTimeout(() => {
      setLoginStatus('login');
    }, 2000);
  };

  const handleLogout = () => {
    setLoginStatus('logout');
  };

  return (
    <div className="status">
      {loginStatus === 'logout' ? (
        <Login onLogin={handleLogin} />
      ) : loginStatus === 'load' ? (
        <Spinner size={35} />
      ) : (
        <Logout onLogout={handleLogout} />
      )}
    </div>
  );
};

export default Auth;

// option - class component

// class Auth extends Component {
//   state = {
//     loginStatus: 'logout',
//   };

//   handleLogin = () => {
//     this.setState({
//       loginStatus: 'load',
//     });

//     setTimeout(() => {
//       this.setState({
//         loginStatus: 'login',
//       });
//     }, 2000);
//   };

//   handleLogout = () => {
//     this.setState({
//       loginStatus: 'logout',
//     });
//   };

//   render() {
//     if (this.state.loginStatus === 'load') {
//       return (
//         <div className="status">
//           <Spinner size={35} />
//         </div>
//       );
//     }

//     return (
//       <div className="status">
//         {this.state.loginStatus === 'logout' ? (
//           <Login onLogin={this.handleLogin} />
//         ) : (
//           <Logout onLogout={this.handleLogout} />
//         )}
//       </div>
//     );
//   }
// }
