import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen]     = useState(false);
  const dropdownRef = useRef(null);
  const location    = useLocation();

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      {/* ── Brand ── */}
      <Link to="/" className="brand-logo" onClick={closeMenu}>
        <div className="logo-main">
          <span className="brand-blue">DH</span>
          <span className="brand-yellow">₹</span>
          <span className="brand-blue">UV</span>
        </div>
        <span className="logo-sub">Investments</span>
      </Link>

      {/* ── Desktop Nav Links ── */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        {/* Dropdown */}
        <li
          className="dropdown"
          ref={dropdownRef}
          onMouseEnter={() => window.innerWidth > 900 && setIsDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth > 900 && setIsDropdownOpen(false)}
        >
          <Link
            to="/services"
            className="dropdown-trigger"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            Services{' '}
            <span className={`arrow ${isDropdownOpen ? 'arrow-up' : ''}`}>▼</span>
          </Link>

          <ul className={`dropdown-menu ${isDropdownOpen ? 'show-dropdown' : ''}`}>
            <li><Link to="/mutual-funds"   onClick={closeMenu}>Mutual Funds &amp; SIP</Link></li>
            <li><Link to="/term-insurance" onClick={closeMenu}>Term Insurance</Link></li>
            <li><Link to="/mediclaim"       onClick={closeMenu}>Mediclaim / Health</Link></li>
            <li><Link to="/realestate"       onClick={closeMenu}>Real Estate</Link></li>
            <li><Link to="/childplan"       onClick={closeMenu}>Child Education &amp; Marriage</Link></li>
            <li><Link to="/retirement"     onClick={closeMenu}>Retirement Planning</Link></li>
            <li><Link to="/portfolio"       onClick={closeMenu}>Portfolio Review</Link></li>
          </ul>
        </li>

        <li><Link to="/about"   onClick={closeMenu}>AboutUs</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>ContactUs</Link></li>
      </ul>

      {/* ── CTA ── */}
      <div className="nav-actions">
        <a href="tel:+918626062667" className="btn-cta">
          <span>Consult Now</span>
        </a>
      </div>

      {/* ── Hamburger ── */}
      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;