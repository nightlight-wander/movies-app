import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header ">
      <div className="logo-head-comp flex-vCenter">
        <Link to="/" className="logo-name-comp">LOGO</Link>
      </div>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />

      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>

      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search" aria-label="search" />
        <button className="submit-btn"><span className="search-icon material-icons material-icons-outlined search-submit">
          search</span></button>
      </div>
    </header>
  )
}

export { Header };