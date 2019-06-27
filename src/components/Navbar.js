import React from 'react';

const Navbar = () => {
  return (
    <nav className="red lighten-1">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
          RoboLancers
        </a>
        <ul id="nav-mobile" className="right hide-on-sm-and-down">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
