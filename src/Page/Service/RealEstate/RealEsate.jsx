import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RealEsate.css';

const RealEstate = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Why should I consult a financial planner for Real Estate?",
      answer: "Real estate brokers often push properties for commissions, but as financial planners, we provide unbiased advice. We analyze if a property fits your overall portfolio, calculate actual ROI (Return on Investment), and ensure it aligns with your long-term liquidity and wealth goals."
    },
    {
      question: "Commercial vs. Residential: Which is better?",
      answer: "It depends on your goal. Commercial properties generally offer higher rental yields (7-9%) and are great for passive income. Residential properties offer lower rental yields (2-3%) but often provide steady, long-term capital appreciation and are easier to liquidate."
    },
    {
      question: "How do you ensure the property is safe to invest in?",
      answer: "We strictly recommend RERA-registered properties. We also analyze the builder's track record, past project delivery timelines, location infrastructure growth, and legal clarity before suggesting any project."
    },
    {
      question: "Do you assist NRIs with property investments in India?",
      answer: "Yes, we provide end-to-end assistance for Non-Resident Indians (NRIs) looking to invest in Indian real estate, including taxation guidance (TDS), documentation, and identifying high-growth corridors."
    }
  ];

  return (
    <div className="re-page-wrapper">
      
      {/* Premium Hero Section */}
      <section className="re-premium-hero">
        <div className="hero-content-side">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="separator">/</span> <Link to="/services">Services</Link> <span className="separator">/</span> <span className="current">Real Estate</span>
          </div>
          
          <div className="hero-text-content">
            <span className="hero-eyebrow">Tangible Assets</span>
            <h1 className="hero-title">
              Build Wealth, <br />
              <span className="text-gold">Brick by Brick.</span>
            </h1>
            <p className="hero-subtitle">
              Diversify your portfolio with strategic real estate investments. From high-yield commercial spaces to premium residential projects, we guide you toward properties that offer solid capital appreciation and steady rental income.
            </p>
            <div className="hero-actions">
              <a href="#consult" className="btn-gold-solid">Explore Properties</a>
              <a href="#faq" className="btn-outline-light">Read FAQs</a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual-side re-bg">
          <div className="visual-overlay"></div>
          <div className="hero-stats-badge building-badge">
            <span className="building-icon">🏢</span>
            <span className="stat-label">100% RERA Compliant</span>
          </div>
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="re-benefits-section">
        <div className="benefits-container">
          <div className="section-header center">
            <span className="section-eyebrow">— The Real Estate Advantage</span>
            <h2>Why Invest in Property?</h2>
            <div className="section-line center-line"></div>
          </div>
          
          <div className="premium-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">📈</span>
              </div>
              <h3>Capital Appreciation</h3>
              <p>Invest in emerging locations and infrastructure corridors to benefit from massive property value growth over a 5 to 10-year horizon.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">🔑</span>
              </div>
              <h3>Passive Rental Income</h3>
              <p>Generate a steady, inflation-beating monthly cash flow by investing in pre-leased commercial spaces or high-demand residential hubs.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">🛡️</span>
              </div>
              <h3>Portfolio Diversification</h3>
              <p>Balance the volatility of the stock market by anchoring your portfolio with tangible, physical assets that hold intrinsic value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Approach Section */}
      <section className="re-approach-section">
        <div className="approach-container">
          <div className="approach-text">
            <h2>Our Unbiased Advisory Approach</h2>
            <div className="section-line"></div>
            <p>Unlike traditional brokers, we don't just sell properties. We analyze your entire financial lifecycle to recommend real estate investments that make mathematical sense.</p>
            
            <ul className="approach-checklist">
              <li><span className="gold-check">✦</span> <strong>Location Analytics:</strong> Identifying micro-markets with upcoming infrastructure (Metro, Highways, IT Parks).</li>
              <li><span className="gold-check">✦</span> <strong>Builder Due Diligence:</strong> Strict background checks on developer track records and financial health.</li>
              <li><span className="gold-check">✦</span> <strong>ROI & Yield Calculation:</strong> Factoring in taxes, maintenance, and loan interest to calculate actual returns.</li>
              <li><span className="gold-check">✦</span> <strong>Loan Assistance:</strong> Helping you structure home loans for maximum tax benefits under Section 24 and 80C.</li>
            </ul>
          </div>
          <div className="approach-visual">
             <div className="glass-card">
                <h3>Commercial vs. Residential</h3>
                <p>Confused between a flat and an office space? Book a session with Mr. Nikam to understand risk profiles, ticket sizes, and rental yields to make an informed decision.</p>
                <a href="#contact" className="btn-gold-solid" style={{marginTop: '1.5rem', display: 'inline-block'}}>Schedule Consultation</a>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="re-faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Smart real estate investing starts with asking the right questions.</p>
          </div>
          
          <div className="faq-accordion">
            {faqData.map((faq, index) => (
              <div 
                className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} 
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span className="faq-toggle">
                    <div className="toggle-line vertical"></div>
                    <div className="toggle-line horizontal"></div>
                  </span>
                </div>
                <div className="faq-answer">
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default RealEstate;