import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">EMS</Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/employees" className="navbar-link">Employees</Link>
        </li>
        <li className="navbar-item">
          <Link to="/departments" className="navbar-link">Departments</Link>
        </li>
        <li className="navbar-item">
          <Link to="/add-employee" className="navbar-link">Add Employee</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
