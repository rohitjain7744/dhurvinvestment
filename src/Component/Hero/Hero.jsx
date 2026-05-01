import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container" id="home">

      {/* ── Cinematic Background Slideshow ── */}
      <div className="hero-backgrounds">
        <div className="bg-img bg-img-1"></div>
        <div className="bg-img bg-img-2"></div>
        <div className="bg-img bg-img-3"></div>
        <div className="bg-img bg-img-4"></div>
      </div>

      {/* Decorative vertical gold rule */}
      <span className="gold-line" aria-hidden="true" />

      {/* ── Main Content ── */}
      <div className="hero-content">
        <h1 className="hero-title">
          Secure Your Future with{' '}
          <span className="highlight-text">Dhruv Investments</span>
        </h1>

        <h2 className="hero-subtitle">Your Personal Financial Planner</h2>

        <p className="hero-description">
          Expert guidance for wealth creation, family protection, and retirement
          planning. Let Mr. Jitendra Nikam help you build a portfolio tailored
          to your life goals.
        </p>

        <div className="hero-buttons">
          <a href="/services" className="btn-primary">
            <span>Explore Services</span>
          </a>
          <a href="#contact" className="btn-secondary">
            Book a Free Review
          </a>
        </div>
      </div>

      {/* ── Slide Progress Indicators ── */}
      <div className="slide-indicators" aria-hidden="true">
        <div className="slide-dot" />
        <div className="slide-dot" />
        <div className="slide-dot" />
        <div className="slide-dot" />
      </div>

      {/* ── Trust Banner ── */}
      <div className="trust-banner">
        <div className="trust-item">Certified Financial Planner</div>
        <div className="trust-item">Tailored SIP &amp; Mutual Funds</div>
        <div className="trust-item">Comprehensive Goal Setting</div>
      </div>

    </section>
  );
};

export default Hero;