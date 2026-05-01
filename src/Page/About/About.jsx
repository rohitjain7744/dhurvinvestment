import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Photo from "../../assets/photo.jpg"

const AboutPage = () => {
  // Simple scroll-to-top on load for a better user experience
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      
      {/* --- Premium Split Hero Section --- */}
      <section className="about-premium-hero">
        <div className="hero-content-side">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="separator">/</span> <span className="current">About Us</span>
          </div>
          
          <div className="hero-text-content">
            <span className="hero-eyebrow">Our Story</span>
            <h1 className="hero-title">
              Empowering Your <br />
              <span className="text-gold">Financial Freedom</span>
            </h1>
            <p className="hero-subtitle">
              Dhruv Investments is more than a financial advisory firm; we are your lifelong partners in navigating the complexities of wealth creation and protection.
            </p>
          </div>
        </div>
        
        <div className="hero-visual-side">
          {/* Background image is handled in CSS, but this overlay adds depth */}
          <div className="visual-overlay"></div>
          <div className="hero-stats-badge">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
        </div>
      </section>

      {/* --- Founder Section (Expanded) --- */}
      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-grid">
            
            <div className="founder-visual">
              <div className="founder-image-box">
                {/* Replace with actual image tag later: <img src={founderImage} alt="Mr. Jitendra Nikam" /> */}
                <img src={Photo} alt="Mr. Jitendra Nikam" />
              </div>
              <div className="decorative-element"></div>
            </div>

            <div className="founder-content">
              <span className="section-eyebrow">— The Visionary</span>
              <h2>Meet Mr. Jitendra Nikam</h2>
              <h4 className="founder-role">Founder & Lead Advisor</h4>
              
              <div className="bio-text">
                <p>
                  With over a decade of deep expertise in the Indian financial sector, Mr. Jitendra Nikam established Dhruv Investments to bridge the gap between complex financial products and the everyday investor. 
                </p>
                <p>
                  Based in Chinchwad, Pune, he has guided hundreds of families through volatile markets, ensuring their hard-earned money is protected against inflation and grown systematically to meet their life goals. 
                </p>
                <blockquote className="founder-quote">
                  "Investing is not about timing the market, but about time in the market."
                </blockquote>
              </div>
              
              <div className="certification-list">
                <div className="cert-item">
                  <span className="cert-icon">✦</span> Certified Mutual Fund Distributor
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✦</span> Life & General Insurance Expert
                </div>
                <div className="cert-item">
                  <span className="cert-icon">✦</span> Comprehensive Portfolio Manager
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Mission & Vision Section --- */}
      <section className="mission-vision-section">
        <div className="mv-container">
          
          <div className="mv-card vision-card">
            <div className="mv-icon-wrapper">
              <span className="mv-icon">👁️</span>
            </div>
            <h3>Our Vision</h3>
            <p>
              To become the most trusted and transparent financial planning firm in India, ensuring every household achieves complete financial independence without stress or confusion.
            </p>
          </div>

          <div className="mv-card mission-card">
            <div className="mv-icon-wrapper">
              <span className="mv-icon">🎯</span>
            </div>
            <h3>Our Mission</h3>
            <p>
              To educate, empower, and execute. We strive to simplify complex investments, map them directly to our clients' unique life goals, and provide unwavering support through every market cycle.
            </p>
          </div>

        </div>
      </section>

      {/* --- Core Values Section --- */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-header">
            <span className="section-eyebrow">— Why Choose Us</span>
            <h2>Our Core Values</h2>
            <div className="section-line"></div>
          </div>

          <div className="values-grid">
            <div className="value-box">
              <div className="value-number">01</div>
              <h4>Absolute Transparency</h4>
              <p>No hidden fees, no confusing jargon. We explain every risk and reward before you invest a single rupee.</p>
            </div>
            <div className="value-box">
              <div className="value-number">02</div>
              <h4>Client-First Integrity</h4>
              <p>We recommend products that are right for your portfolio, not products that generate the highest commissions.</p>
            </div>
            <div className="value-box">
              <div className="value-number">03</div>
              <h4>Lifelong Partnership</h4>
              <p>We don't just execute transactions. We conduct annual reviews, rebalance portfolios, and stand by your family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to build a secure future?</h2>
          <p>Schedule a free, no-obligation discovery meeting with Mr. Nikam today.</p>
          <Link to="/contact" className="btn-gold-solid">Contact Us Now</Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;