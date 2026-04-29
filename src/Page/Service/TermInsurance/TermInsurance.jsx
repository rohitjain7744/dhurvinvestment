import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TermInsurance.css';

const TermInsurance = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What exactly is Term Insurance?",
      answer: "Term insurance is the purest form of life insurance. It provides a massive financial safety net (Sum Assured) to your family at a fraction of the cost of traditional endowment policies. If the policyholder passes away during the policy term, the nominee receives the guaranteed payout."
    },
    {
      question: "I already have investments (SIPs/FDs). Do I still need this?",
      answer: "Absolutely. Investments take decades to compound into a substantial corpus. If an unforeseen tragedy occurs tomorrow, your current investments will likely fall short of covering your family's lifelong expenses, clearing home loans, or funding your children's higher education. Term insurance provides immediate, day-one protection."
    },
    {
      question: "Are the premiums and payouts tax-free?",
      answer: "Yes, it is highly tax-efficient. The premiums you pay are eligible for deduction under Section 80C (up to ₹1.5 Lakhs annually). More importantly, the entire death benefit received by your family is completely tax-free under Section 10(10D) of the Income Tax Act."
    },
    {
      question: "Why should I buy it now instead of waiting?",
      answer: "Insurance premiums are strictly based on your entry age and health. If you lock in a policy at age 25, you pay a significantly lower premium for the rest of your life compared to buying the exact same policy at age 35. Waiting also exposes you to the risk of developing lifestyle diseases, which can lead to policy rejection or massive premium hikes."
    }
  ];

  return (
    <div className="term-page-wrapper">
      
      {/* Premium Hero Section */}
      <section className="term-premium-hero">
        <div className="hero-content-side">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="separator">/</span> <Link to="/services">Services</Link> <span className="separator">/</span> <span className="current">Term Insurance</span>
          </div>
          
          <div className="hero-text-content">
            <span className="hero-eyebrow">Family Protection</span>
            <h1 className="hero-title">
              Secure Their <span className="text-gold">Tomorrow</span>, Today.
            </h1>
            <p className="hero-subtitle">
              Life is unpredictable, but your family's financial security shouldn't be. A robust term insurance plan ensures that your loved ones never have to compromise on their lifestyle, education, or dreams in your absence.
            </p>
            <div className="hero-actions">
              <a href="#consult" className="btn-gold-solid">Get a Free Quote</a>
              <a href="#faq" className="btn-outline-light">Read FAQs</a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual-side term-bg">
          <div className="visual-overlay"></div>
          <div className="hero-stats-badge shield-badge">
            <span className="shield-icon">🛡️</span>
            <span className="stat-label">Up to ₹5 Cr Cover</span>
          </div>
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="term-benefits-section">
        <div className="benefits-container">
          <div className="section-header center">
            <span className="section-eyebrow">— Why It's Non-Negotiable</span>
            <h2>The Pillars of Protection</h2>
            <div className="section-line center-line"></div>
          </div>
          
          <div className="premium-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">💶</span>
              </div>
              <h3>Income Replacement</h3>
              <p>Replaces your monthly income, ensuring your family can maintain their standard of living and pay daily bills without financial stress.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">🏡</span>
              </div>
              <h3>Debt Eradication</h3>
              <p>Ensures large liabilities, such as home loans or business debts, are completely paid off, protecting your family's physical assets from banks.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">🎓</span>
              </div>
              <h3>Future Milestones</h3>
              <p>Guarantees that dedicated funds will be available for your children's higher education and marriage, no matter what happens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="term-faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Clear your doubts before making the most important financial decision for your family.</p>
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

      {/* Calculator Integration Area */}
      <div className="calculator-section-container">
          {/* This is where your HLV Calculator component will go. 
              Example: <HLVCalculator /> 
              For now, we leave the container ready. */}
      </div>

    </div>
  );
};

export default TermInsurance;