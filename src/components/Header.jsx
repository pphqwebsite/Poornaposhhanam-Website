import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/style.css';

export default function Header() {
  const [showResources, setShowResources] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Branding (Logo + Org Name) */}
        <div className="branding">
          <Link to="/" className="logo-link">
            <img src="/logo.jpeg" alt="Poornaposhhanam Foundation Logo" className="logo-img" />
          </Link>
          <Link to="/" className="org-name-link">Poornaposhhanam Foundation</Link>
        </div>

        {/* Navigation */}
        <nav className="nav-tabs">
          <NavLink to="/about" className="nav-item">About Us</NavLink>

          <div
            className="nav-item dropdown"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <span className="nav-item-text">Resources</span>
            {showResources && (
              <div className="dropdown-menu">
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/training">Training and Internships</NavLink>
                <NavLink to="/publications">Publications</NavLink>
                <NavLink to="/rnd">R&D</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="nav-item">Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
}
