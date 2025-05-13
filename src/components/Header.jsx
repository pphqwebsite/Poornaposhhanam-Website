import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/style.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="branding">
          <Link to="/" className="logo-link">
            <img src="/logo.jpeg" alt="Poornaposhhanam Foundation Logo" className="logo-img" />
          </Link>
          <Link to="/" className="org-name-link">Poornaposhhanam Foundation</Link>
        </div>

        <div className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-tabs ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>

          <div
            className="nav-item dropdown"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
            onClick={() => setShowResources(!showResources)}
          >
            <span className="nav-item-text">Resources</span>
            {showResources && (
              <div className="dropdown-menu">
                <NavLink to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</NavLink>
                <NavLink to="/training" onClick={() => setMobileMenuOpen(false)}>Training and Internships</NavLink>
                <NavLink to="/publications" onClick={() => setMobileMenuOpen(false)}>Publications</NavLink>
                <NavLink to="/rnd" onClick={() => setMobileMenuOpen(false)}>R&D</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
}
