import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="red lighten-1">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          RoboLancers
        </Link>
        <ul id="nav-mobile" className="right hide-on-sm-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
