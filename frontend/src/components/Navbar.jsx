// src/components/Navbar.js

import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing CSS for Navbar component

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/service" className="navbar-link">Service</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/login" className="navbar-link">Login</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/register" className="navbar-link">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
