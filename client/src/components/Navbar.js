// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profilePicture from '../images/profile.jpg'; // Import your profile picture

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <h1 className="navbar-heading">Mufaro's Travel Blog</h1>
      </div>
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/new">New Post</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
