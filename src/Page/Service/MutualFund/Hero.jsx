import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Make sure to use this new CSS file

const MutualFundsHero = () => {
  return (
    <section className="mf-hero-section">
      <div className="mf-hero-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb" data-aos="fade-down">
          <Link to="/">Home</Link> <span className="separator">/</span> <Link to="/services">Services</Link> <span className="separator">/</span> <span className="current">Mutual Funds & SIP</span>
        </div>

        <div className="mf-hero-content">
          {/* Left Side: Text and Call to Actions */}
          <div className="mf-hero-text" data-aos="fade-right">
            <div className="premium-badge">Wealth Creation</div>
            <h1 className="mf-title">
              The Smart Way to Build <br/>
              <span className="text-gold">Generational Wealth</span>
            </h1>
            <p className="mf-description">
              Harness the power of compounding with expert-curated Mutual Funds and Systematic Investment Plans (SIPs). Start small, stay consistent, and achieve your financial dreams.
            </p>
            
            <ul className="mf-benefits">
              <li><span className="gold-check">✦</span> Rupee Cost Averaging</li>
              <li><span className="gold-check">✦</span> Power of Compounding</li>
              <li><span className="gold-check">✦</span> Expert Portfolio Management</li>
            </ul>

            <div className="mf-buttons">
              <a href="tel:+918626062667" className="btn-gold-solid">Start Your SIP Today</a>
              <a href="#calculator" className="btn-gold-outline">Calculate Returns</a>
            </div>
          </div>

          {/* Right Side: Premium Glassmorphic Graphic */}
          <div className="mf-hero-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="glass-growth-card">
              <div className="chart-placeholder">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
                <div className="bar bar-5">
                  <div className="glow-dot"></div>
                </div>
              </div>
              <div className="growth-text">
                <h4>Consistent Growth</h4>
                <p>Invest for the long term</p>
              </div>
            </div>
            
            {/* Background decorative glow */}
            <div className="visual-glow"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MutualFundsHero;