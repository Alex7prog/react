import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

const Auth = () => {
  const [loginStatus, setLoginStatus] = useState({
    isLogin: false,
    isSpinner: false,
  });

  const handleLogin = () => {
    setLoginStatus({ ...loginStatus, isSpinner: true });

    setTimeout(() => {
      setLoginStatus({ ...loginStatus, isLogin: true, isSpinner: false });
    }, 2000);
  };

  const handleLogout = () => {
    setLoginStatus({ ...loginStatus, isLogin: false });
  };

  const { isLogin, isSpinner } = loginStatus;

  if (isSpinner) {
    return (
      <div className="status">
        <Spinner size={35} />
      </div>
    );
  }

  return (
    <div className="status">
      {isLogin ? <Logout onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default Auth;

// option - class component
// old solution

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
