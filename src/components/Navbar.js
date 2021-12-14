import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../static/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">CreatePost</Link>
            <Link to="/signUp">Sign Up</Link>
            <Link to="/contact">Login</Link>
            </div>
        </div>
        </div>
    )
}
export default Navbar;