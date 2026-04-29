import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioReview.css';

const PortfolioReview = () => {
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
      question: "My portfolio is showing positive returns. Why do I still need a review?",
      answer: "Positive returns don't always mean optimal returns. If the market is up 20% and your portfolio is only up 10%, you are actually losing out on potential wealth. We benchmark your funds against relevant indices to ensure you are generating true alpha, not just riding a bull market."
    },
    {
      question: "What is 'Over-diversification'?",
      answer: "Many investors hold 15-20 different mutual funds, thinking it reduces risk. In reality, this leads to massive portfolio overlap (owning the same stocks multiple times across different funds). It dilutes your returns and turns your portfolio into an expensive index fund. We help consolidate your holdings to 4-6 high-conviction funds."
    },
    {
      question: "How often should I get my portfolio reviewed?",
      answer: "We recommend a comprehensive portfolio review at least once a year. However, if there is a major life event (marriage, childbirth, career change) or a drastic shift in market conditions, an immediate review is necessary to realign your asset allocation."
    },
    {
      question: "Will restructuring my portfolio attract huge taxes?",
      answer: "Tax efficiency is a core part of our review process. We strategically utilize concepts like Tax-Loss Harvesting and the ₹1.25 Lakh annual LTCG tax exemption to restructure your portfolio with minimal to zero tax impact."
    }
  ];

  return (
    <div className="pr-page-wrapper">
      
      {/* Premium Hero Section */}
      <section className="pr-premium-hero">
        <div className="hero-content-side">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="separator">/</span> <Link to="/services">Services</Link> <span className="separator">/</span> <span className="current">Portfolio Review</span>
          </div>
          
          <div className="hero-text-content">
            <span className="hero-eyebrow">Wealth Optimization</span>
            <h1 className="hero-title">
              Optimize Your Wealth, <br />
              <span className="text-gold">Eliminate the Clutter.</span>
            </h1>
            <p className="hero-subtitle">
              Are you holding too many underperforming funds? Our comprehensive Portfolio X-Ray identifies hidden risks, overlapping assets, and high-cost products to realign your investments with your actual life goals.
            </p>
            <div className="hero-actions">
              <a href="#consult" className="btn-gold-solid">Get Your Portfolio X-Ray</a>
              <a href="#faq" className="btn-outline-light">Read FAQs</a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual-side pr-bg">
          <div className="visual-overlay"></div>
          <div className="hero-stats-badge analysis-badge">
            <span className="analysis-icon">📊</span>
            <span className="stat-label">360° Financial Audit</span>
          </div>
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="pr-benefits-section">
        <div className="benefits-container">
          <div className="section-header center">
            <span className="section-eyebrow">— Signs You Need a Review</span>
            <h2>Is Your Portfolio Truly Healthy?</h2>
            <div className="section-line center-line"></div>
          </div>
          
          <div className="premium-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">📉</span>
              </div>
              <h3>Underperformance Fix</h3>
              <p>Identify mutual funds and stocks that have consistently lagged behind their benchmark indices over the past 3 to 5 years and weed them out.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">🧩</span>
              </div>
              <h3>Remove Fund Overlap</h3>
              <p>Stop paying multiple fund managers to buy the exact same stocks. We clean up over-diversified portfolios to create a sharp, focused investment strategy.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">⚖️</span>
              </div>
              <h3>Rebalance Asset Allocation</h3>
              <p>As markets move, your original 60:40 Equity-to-Debt ratio might have skewed dangerously. We rebalance your assets to ensure your risk profile remains intact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section (Split Layout) */}
      <section className="pr-strategy-section">
        <div className="strategy-container">
          <div className="strategy-text">
            <h2>Our 4-Step Restructuring Process</h2>
            <div className="section-line"></div>
            <p>We approach your existing investments with a clinical, data-driven mindset. No emotional attachments to bad funds—just pure optimization for future growth.</p>
            
            <ul className="strategy-checklist">
              <li><span className="gold-check">✦</span> <strong>Discovery & Consolidation:</strong> We gather all your scattered investments (MFs, Stocks, FDs, ULIPs) into one unified dashboard.</li>
              <li><span className="gold-check">✦</span> <strong>Diagnostic X-Ray:</strong> Analyzing Expense Ratios, Alpha generation, downside protection, and sector exposure.</li>
              <li><span className="gold-check">✦</span> <strong>The Action Plan:</strong> Providing a clear "Hold, Sell, or Buy" recommendation for every single asset in your portfolio.</li>
              <li><span className="gold-check">✦</span> <strong>Tax-Optimized Execution:</strong> Gradually shifting funds to better avenues without triggering unnecessary short-term or long-term capital gains taxes.</li>
            </ul>
          </div>
          <div className="strategy-visual">
             <div className="glass-card">
                <h3>Got 'Toxic' Policies?</h3>
                <p>Many investors are stuck with expensive, low-return ULIPs or Endowment plans sold by bank relationship managers. Let us calculate the surrender value vs. future opportunity cost to help you exit smartly.</p>
                <a href="#contact" className="btn-gold-solid" style={{marginTop: '1.5rem', display: 'inline-block'}}>Book a Free Audit</a>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="pr-faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Understanding the mechanics of portfolio restructuring.</p>
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

export default PortfolioReview;