// src/components/Navbar.js

import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='left'>Company</div>

      <div className="right">
        <NavLink to="/" className="navbar-link">Home</NavLink>
        <NavLink to="/about" className="navbar-link">About</NavLink>
        <NavLink to="/contact" className="navbar-link">Contact</NavLink>
        <NavLink to="/service" className="navbar-link">Service</NavLink>
        <NavLink to="/login" className="navbar-link">Login</NavLink>
        <NavLink to="/register" className="navbar-link">Register</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
