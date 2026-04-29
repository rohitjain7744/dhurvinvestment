import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/* ─── Data ──────────────────────────────────────────────────── */
const SERVICES_LINKS = [
  { label: 'Mutual Fund & SIP',        to: '/mutual-funds' },
  { label: 'Term Insurance',           to: '/term-insurance' },
  { label: 'Mediclaim / Health',       to: '/services' },
  { label: 'Real Estate',              to: '/services' },
  { label: 'Retirement Planning',      to: '/retirement' },
  { label: 'Child Education & Marriage', to: '/services' },
  { label: 'Portfolio Review',         to: '/services' },
  { label: 'Goal Setting',             to: '/services' },
];

const QUICK_LINKS = [
  { label: 'Home',              to: '/' },
  { label: 'About Mr. Nikam',  to: '/about' },
  { label: 'All Services',     to: '/services' },
  { label: 'Contact Us',       to: '/contact' },
];

const CERTIFICATIONS = [
  'AMFI Registered Distributor',
  'IRDAI Certified Advisor',
  'NISM Series V-A',
  'CFP Certified',
];

const SOCIALS = [
  { icon: '💬', href: 'https://wa.me/918626062667', label: 'WhatsApp' },
  { icon: '📘', href: '#', label: 'Facebook' },
  { icon: '💼', href: '#', label: 'LinkedIn' },
  { icon: '📸', href: '#', label: 'Instagram' },
];

/* ─── Component ─────────────────────────────────────────────── */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* ── CTA Band ── */}
      <div className="footer-cta-band">
        <div className="footer-cta-text">
          <h3>Start Your Financial Journey Today</h3>
          <p>Free, no-obligation consultation with Mr. Jitendra Nikam — Nashik's trusted advisor.</p>
        </div>
        <div className="footer-cta-actions">
          <a href="tel:+918626062667" className="fcta-btn-gold">📞 Call Now</a>
          <Link to="/contact" className="fcta-btn-outline">Send an Enquiry</Link>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="footer-main">

        {/* Brand column */}
        <div className="footer-brand">
          <Link to="/" className="brand-logo">
            <div className="logo-main">
              <span className="b-blue">DH</span>
              <span className="b-gold">₹</span>
              <span className="b-blue">UV</span>
            </div>
            <span className="logo-sub">Investments</span>
          </Link>

          <p className="brand-tagline">
            Nashik's trusted financial planning practice — helping families build wealth,
            protect income, and achieve life goals since 2008.
          </p>

          <div className="brand-contact">
            <a href="tel:+918626062667" className="bcontact-item">
              <span className="bcontact-icon">📞</span>
              +91 86260 62667
            </a>
            <a href="mailto:info@dhruvinvestments.com" className="bcontact-item">
              <span className="bcontact-icon">✉️</span>
              Finserv.dhruv@gmail.com
            </a>
            <span className="bcontact-item">
              <span className="bcontact-icon">📍</span>
              office No.117, kahinoor B-zone Near Vijay Sales, Chinchwad Pune-411033
            </span>
            <span className="bcontact-item">
              <span className="bcontact-icon">🕐</span>
              Mon – Sat &nbsp;|&nbsp; 9:00 AM – 7:00 PM
            </span>
          </div>

          <div className="social-row">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-icon"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul className="footer-links">
            {SERVICES_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>

          {/* Hours block */}
          <h4 style={{ marginTop: '1.8rem' }}>Working Hours</h4>
          <ul className="footer-links">
            <li><span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.55)' }}>Monday – Friday</span></li>
            <li><span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.75)' }}>9:00 AM – 7:00 PM</span></li>
            <li style={{ marginTop: '0.3rem' }}><span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.55)' }}>Saturday</span></li>
            <li><span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.75)' }}>9:00 AM – 4:00 PM</span></li>
            <li style={{ marginTop: '0.3rem' }}><span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.4)' }}>Sunday — Closed</span></li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="footer-col">
          <h4>Disclaimer</h4>
          <p style={{ fontSize: '0.76rem', color: 'rgba(245,240,232,0.45)', lineHeight: '1.85' }}>
            Mutual fund investments are subject to market risks. Please read all scheme-related
            documents carefully before investing.
          </p>
          <p style={{ fontSize: '0.76rem', color: 'rgba(245,240,232,0.45)', lineHeight: '1.85', marginTop: '0.9rem' }}>
            Insurance is the subject matter of solicitation. IRDAI Registration No. applies.
            Past performance is not indicative of future returns.
          </p>
          <p style={{ fontSize: '0.76rem', color: 'rgba(245,240,232,0.45)', lineHeight: '1.85', marginTop: '0.9rem' }}>
            Dhruv Investments is an AMFI-registered mutual fund distributor.
          </p>
        </div>

      </div>

      {/* ── Certification Bar ── */}
      <div className="cert-bar">
        {CERTIFICATIONS.map((c) => (
          <span className="cert-item" key={c}>
            <span className="cert-dot" />
            {c}
          </span>
        ))}
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <p>
          © {year} <span>Dhruv Investments</span>. All rights reserved.
          Designed with ♥ for financial freedom.
        </p>
        <nav className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Grievance Redressal</a>
        </nav>
      </div>

    </footer>
  );
};

export default Footer;