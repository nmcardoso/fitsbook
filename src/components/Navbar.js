import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserSingleton from '../helpers/UserSingleton';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    const us = new UserSingleton();
    this.state = {
      showLoginButton: !Boolean(us.getToken())
    };
    us.addLoginListener(() => this.setState({ showLoginButton: false }));
    us.addLogoutListener(() => this.setState({ showLoginButton: true }));
  }

  render() {
    const LoginButton = () => {
      return (
        <li className="nav-item">
          <NavLink exact to="/login" className="nav-link" activeClassName="active">Login</NavLink>
        </li>
      );
    };

    const LogoutButton = () => {
      return (
        <li className="nav-item">
          <NavLink exact to="/logout" className="nav-link" activeClassName="active">Logout</NavLink>
        </li>
      );
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <img src={process.env.PUBLIC_URL + '/img/data_science_icon.svg'} width="45" height="45" alt="" />
          <span className="ml-2">Fitsbook</span>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/models" className="nav-link" activeClassName="active">Models</NavLink>
            </li>
            {this.state.showLoginButton ? <LoginButton /> : <LogoutButton />}
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.showLoginButton = false;

export default Navbar;