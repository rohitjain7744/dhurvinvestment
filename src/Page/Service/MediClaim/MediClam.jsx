import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MediClaim.css';

const HealthInsurance = () => {
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
      question: "What is the difference between Individual and Family Floater plans?",
      answer: "An Individual plan covers only one person for a specific sum insured. A Family Floater covers your entire family (you, spouse, and kids) under a single umbrella cover. For example, a ₹10 Lakh floater means any family member can use up to ₹10 Lakhs in a given year."
    },
    {
      question: "What are 'Pre-existing Diseases' and 'Waiting Periods'?",
      answer: "Pre-existing diseases are medical conditions you already have before buying the policy (like diabetes or hypertension). Insurers typically apply a waiting period of 2 to 4 years before covering treatments related to these specific conditions. All other sudden illnesses or accidents are covered after an initial 30-day waiting period."
    },
    {
      question: "Are room rent limits and sub-limits important?",
      answer: "Yes, extremely. Many basic policies cap hospital room rent at 1% of the sum insured per day. If you choose a more expensive room, all other hospital charges (doctor fees, surgery) are proportionately deducted from your pocket. We strongly recommend policies with 'No Room Rent Capping'."
    },
    {
      question: "Do I get any tax benefits for paying Mediclaim premiums?",
      answer: "Yes. Under Section 80D of the Income Tax Act, you can claim a deduction of up to ₹25,000 for premiums paid for yourself and your family. If you also pay for your senior citizen parents, you can claim an additional ₹50,000, bringing the total potential deduction to ₹75,000."
    }
  ];

  return (
    <div className="health-page-wrapper">
      
      {/* Premium Hero Section */}
      <section className="health-premium-hero">
        <div className="hero-content-side">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="separator">/</span> <Link to="/services">Services</Link> <span className="separator">/</span> <span className="current">Mediclaim</span>
          </div>
          
          <div className="hero-text-content">
            <span className="hero-eyebrow">Health & Wellness</span>
            <h1 className="hero-title">
              Secure Your Health, <br />
              <span className="text-gold">Protect Your Wealth.</span>
            </h1>
            <p className="hero-subtitle">
              Medical inflation is rising at an unprecedented rate. Ensure your family has access to the best healthcare facilities without draining your life's savings through our comprehensive cashless Mediclaim solutions.
            </p>
            <div className="hero-actions">
              <a href="#consult" className="btn-gold-solid">Compare Health Plans</a>
              <a href="#faq" className="btn-outline-light">Read FAQs</a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual-side health-bg">
          <div className="visual-overlay"></div>
          <div className="hero-stats-badge medical-badge">
            <span className="medical-icon">🏥</span>
            <span className="stat-label">10,000+ Cashless Hospitals</span>
          </div>
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="health-benefits-section">
        <div className="benefits-container">
          <div className="section-header center">
            <span className="section-eyebrow">— Why Health Insurance is Crucial</span>
            <h2>Complete Healthcare Protection</h2>
            <div className="section-line center-line"></div>
          </div>
          
          <div className="premium-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">💳</span>
              </div>
              <h3>Cashless Treatment</h3>
              <p>Focus on recovery, not bills. Get direct cashless admission in a massive network of top-tier hospitals across India without paying out of pocket.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">📈</span>
              </div>
              <h3>Beat Medical Inflation</h3>
              <p>With healthcare costs doubling every few years, a robust health cover acts as a financial shield against unexpected and exorbitant medical bills.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">👨‍👩‍👧‍👦</span>
              </div>
              <h3>Family Floater Plans</h3>
              <p>Cover your spouse, children, and senior citizen parents under comprehensive, zero-sub-limit plans tailored specifically for your family's medical history.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Types Highlights */}
      <section className="health-plans-section">
        <div className="plans-container">
          <div className="plans-text">
            <h2>Finding the Right Fit</h2>
            <div className="section-line"></div>
            <p>Every individual and family has unique healthcare needs. We help you navigate through complex policy wordings to find a plan with the maximum benefits and minimum restrictions.</p>
            
            <ul className="plan-checklist">
              <li><span className="gold-check">✦</span> <strong>No Room Rent Capping:</strong> Stay in a private room without proportionate deductions.</li>
              <li><span className="gold-check">✦</span> <strong>Pre & Post Hospitalization:</strong> Cover for diagnostics and medicines up to 60-90 days.</li>
              <li><span className="gold-check">✦</span> <strong>Restoration Benefit:</strong> Policy automatically recharges to 100% if exhausted in a year.</li>
              <li><span className="gold-check">✦</span> <strong>No Claim Bonus:</strong> Sum insured increases for every claim-free year.</li>
            </ul>
          </div>
          <div className="plans-visual">
             <div className="glass-card">
                <h3>Get Expert Advice</h3>
                <p>Not sure which policy handles pre-existing diseases the best? Mr. Nikam compares over 15+ top health insurance companies to give you unbiased recommendations.</p>
                <a href="#contact" className="btn-gold-solid" style={{marginTop: '1.5rem', display: 'inline-block'}}>Book Free Review</a>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="health-faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Understand the fine print of health insurance before you buy.</p>
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

export default HealthInsurance;