import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src="/img/data_science_icon.svg" width="45" height="45" alt="" /> <span className="ml-1">Fitsbook</span>
      </a>

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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;