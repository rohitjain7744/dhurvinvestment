import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Retirement.css';

const Retirement = () => {
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
      question: "How much retirement corpus do I actually need?",
      answer: "It depends on your current lifestyle, expected retirement age, and inflation. A general thumb rule is the 'Rule of 25' or '300x your monthly expenses'. If your monthly expense is ₹50,000 today, factoring in 6% inflation over 20 years, you will need a substantial corpus to generate a safe passive income. We calculate this exact number for you."
    },
    {
      question: "What is an SWP (Systematic Withdrawal Plan)?",
      answer: "SWP is the exact opposite of an SIP. While SIP helps you build a corpus by investing monthly, an SWP allows you to withdraw a fixed amount every month from your accumulated mutual fund corpus. It acts as your monthly 'pension' while the remaining money continues to grow."
    },
    {
      question: "Is NPS (National Pension System) a good option?",
      answer: "Yes, NPS is a brilliant low-cost retirement tool that offers an additional tax deduction of ₹50,000 under Section 80CCD(1B). However, it has lock-in rules and mandatory annuity requirements. We usually recommend a balanced mix of NPS for tax benefits and flexible Equity Mutual Funds for aggressive growth."
    },
    {
      question: "What if I start late, say around age 45?",
      answer: "Starting late means you have less time for compounding, but it is never too late. You will need to allocate a higher percentage of your income towards retirement savings and optimize your portfolio for better risk-adjusted returns. We help restructure your current assets to accelerate your corpus building."
    }
  ];

  return (
    <div className="retire-page-wrapper">
      
      {/* Premium Hero Section */}
      <section className="retire-premium-hero">
        <div className="hero-content-side">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="separator">/</span> <Link to="/services">Services</Link> <span className="separator">/</span> <span className="current">Retirement Planning</span>
          </div>
          
          <div className="hero-text-content">
            <span className="hero-eyebrow">Financial Independence</span>
            <h1 className="hero-title">
              Design Your <br />
              <span className="text-gold">Golden Years.</span>
            </h1>
            <p className="hero-subtitle">
              Retirement isn't the end of the road; it's the beginning of freedom. Build a robust, inflation-proof corpus so you can maintain your lifestyle and live life strictly on your own terms.
            </p>
            <div className="hero-actions">
              <a href="#consult" className="btn-gold-solid">Plan Your Retirement</a>
              <a href="#faq" className="btn-outline-light">Read FAQs</a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual-side retire-bg">
          <div className="visual-overlay"></div>
          <div className="hero-stats-badge palm-badge">
            <span className="palm-icon">🌴</span>
            <span className="stat-label">Create Passive Income</span>
          </div>
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="retire-benefits-section">
        <div className="benefits-container">
          <div className="section-header center">
            <span className="section-eyebrow">— The Need for Planning</span>
            <h2>Why Retirement Planning is Critical</h2>
            <div className="section-line center-line"></div>
          </div>
          
          <div className="premium-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">📈</span>
              </div>
              <h3>Beat Inflation</h3>
              <p>The cost of living doubles roughly every 10-12 years. Your retirement corpus needs to be invested smartly to outpace inflation, ensuring your purchasing power never drops.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">💸</span>
              </div>
              <h3>Regular Monthly Income</h3>
              <p>Transition smoothly from receiving a salary to generating your own 'paycheck'. We set up structured withdrawal plans (SWPs) to provide steady, tax-efficient monthly cash flow.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">🏥</span>
              </div>
              <h3>Healthcare Buffer</h3>
              <p>Medical expenses skyrocket during old age. A well-planned retirement portfolio accounts for increased healthcare costs without depleting your core income-generating assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section (Split Layout) */}
      <section className="retire-strategy-section">
        <div className="strategy-container">
          <div className="strategy-text">
            <h2>The 3-Phase Retirement Blueprint</h2>
            <div className="section-line"></div>
            <p>We don't rely on guesswork. Our retirement advisory is structured into three distinct phases based on your current age and distance from retirement.</p>
            
            <ul className="strategy-checklist">
              <li><span className="gold-check">✦</span> <strong>Accumulation Phase (Age 25-45):</strong> Aggressive wealth building using high-growth equity mutual funds and SIPs to maximize compounding.</li>
              <li><span className="gold-check">✦</span> <strong>Consolidation Phase (Age 45-55):</strong> Rebalancing the portfolio to lock in gains. Shifting partially to balanced advantage and hybrid funds.</li>
              <li><span className="gold-check">✦</span> <strong>Distribution Phase (Age 55+):</strong> Creating a highly secure, low-risk bucket using Debt Funds, SWPs, and Annuities for a guaranteed monthly payout.</li>
              <li><span className="gold-check">✦</span> <strong>Tax Optimization:</strong> Utilizing NPS and long-term capital gains exemptions to ensure you keep what you earn.</li>
            </ul>
          </div>
          <div className="strategy-visual">
             <div className="glass-card">
                <h3>Find Your FIRE Number</h3>
                <p>(Financial Independence, Retire Early). Want to retire at 50 instead of 60? Let's calculate your exact FIRE number and the monthly investments required to reach it.</p>
                <a href="#contact" className="btn-gold-solid" style={{marginTop: '1.5rem', display: 'inline-block'}}>Calculate Corpus</a>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="retire-faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common queries about securing your post-retirement life.</p>
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

export default Retirement;