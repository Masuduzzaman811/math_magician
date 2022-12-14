import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <div className="navbar">
      <h1 className="nav-heading">Math Margicians</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calculator">calculator</Link>
        <Link to="/Quotes">Quote</Link>
      </div>
    </div>
  </>
);

export default NavBar;
