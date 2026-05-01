import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/logo16.png"

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

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
    <>
      <nav className="navbar">
        {/* ── Brand ── */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <img src={Logo} alt="Dhruv Investments Logo" className="nav-logo-img" />
          <div className="brand-text-group">
            <div className="logo-main">
              <span className="brand-blue">DH</span>
              <span className="brand-yellow">₹</span>
              <span className="brand-blue">UV</span>
            </div>
            <span className="logo-sub">Investments</span>
          </div>
        </Link>
        {/* ⚠️ If logo still stacks: find & delete the SECOND .brand-logo block
            in your original Nav.css — it has flex-direction: column which overrides row */}

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
              <li><Link to="/services/mutual-funds"    onClick={closeMenu}>Mutual Funds </Link></li>
              <li><Link to="/services/sip"      onClick={closeMenu}>SIP</Link></li>
              <li><Link to="/services/term-insurance"  onClick={closeMenu}>Term Insurance</Link></li>
              <li><Link to="/services/mediclaim"       onClick={closeMenu}>Mediclaim / Health</Link></li>
              <li><Link to="/services/real-estate"     onClick={closeMenu}>Real Estate</Link></li>
              <li><Link to="/services/child-plan"      onClick={closeMenu}>Child Education &amp; Marriage</Link></li>
              <li><Link to="/services/retirement"      onClick={closeMenu}>Retirement Planning</Link></li>
              <li><Link to="/services/portfolio-review" onClick={closeMenu}>Investment Review</Link></li>
            </ul>
          </li>

          <li><Link to="/about"   onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>

          {/* CTA inside mobile menu */}
          <li className="mobile-cta-item">
            <a href="tel:+918626062667" className="btn-cta btn-cta-mobile" onClick={closeMenu}>
              <span>📞 Consult Now</span>
            </a>
          </li>
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="nav-actions">
          <a href="tel:+918626062667" className="btn-cta">
            <span>Consult Now</span>
          </a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* ── Mobile Overlay ── */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
};

export default Navbar;