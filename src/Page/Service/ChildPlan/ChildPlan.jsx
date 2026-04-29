import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ChildPlan.css';

const ChildPlan = () => {
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
      question: "When is the right time to start planning for my child's future?",
      answer: "The best time to start is as soon as your child is born. Starting early gives your investments 15-20 years to grow. This allows you to harness the power of compounding, meaning you can build a massive corpus with a very small monthly SIP."
    },
    {
      question: "Traditional Child Insurance Plans vs. Mutual Funds: Which is better?",
      answer: "Traditional child plans often offer low returns (5-6%) which fail to beat education inflation (10-12%). We usually recommend a powerful combination: A pure Term Insurance plan to secure the goal if you are not around, paired with high-growth Equity Mutual Funds to build the actual corpus."
    },
    {
      question: "How do you calculate the target amount for education?",
      answer: "We don't just look at today's cost. If an engineering or medical degree costs ₹20 Lakhs today, at a 10% education inflation rate, it will cost around ₹80 Lakhs to ₹1 Crore after 15 years. We calculate this future value and reverse-engineer the exact monthly SIP required today."
    },
    {
      question: "What if the market crashes right when my child needs the money?",
      answer: "This is where expert portfolio management comes in. We don't leave your money in high-risk equity until the last day. 3 to 4 years before the college admission or marriage milestone, we systematically shift the funds from equity to safe debt instruments to lock in your profits and protect the capital."
    }
  ];

  return (
    <div className="child-page-wrapper">
      
      {/* Premium Hero Section */}
      <section className="child-premium-hero">
        <div className="hero-content-side">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span className="separator">/</span> <Link to="/services">Services</Link> <span className="separator">/</span> <span className="current">Child Future Planning</span>
          </div>
          
          <div className="hero-text-content">
            <span className="hero-eyebrow">Next Generation Wealth</span>
            <h1 className="hero-title">
              Fund Their Dreams, <br />
              <span className="text-gold">Debt-Free.</span>
            </h1>
            <p className="hero-subtitle">
              Education inflation is rising at 10-12% annually. Don't let massive education loans burden your child's future. Start planning today to build a guaranteed corpus for their higher education and marriage.
            </p>
            <div className="hero-actions">
              <a href="#consult" className="btn-gold-solid">Plan Their Future</a>
              <a href="#faq" className="btn-outline-light">Read FAQs</a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual-side child-bg">
          <div className="visual-overlay"></div>
          <div className="hero-stats-badge grad-badge">
            <span className="grad-icon">🎓</span>
            <span className="stat-label">Beat Education Inflation</span>
          </div>
        </div>
      </section>

      {/* Core Benefits Grid */}
      <section className="child-benefits-section">
        <div className="benefits-container">
          <div className="section-header center">
            <span className="section-eyebrow">— Why Plan Early</span>
            <h2>The Cost of Delay</h2>
            <div className="section-line center-line"></div>
          </div>
          
          <div className="premium-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">📈</span>
              </div>
              <h3>Beat Education Inflation</h3>
              <p>Education costs are rising faster than regular inflation. A specialized portfolio ensures your money grows at 12-15% to easily afford future university fees.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">🌱</span>
              </div>
              <h3>The Power of Compounding</h3>
              <p>Starting a SIP when your child is 1 year old requires half the monthly investment compared to starting when they are 8 years old. Time is your biggest asset.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">💍</span>
              </div>
              <h3>Stress-Free Milestones</h3>
              <p>Create separate, dedicated funds for their graduation, post-graduation, and marriage so you never have to liquidate your own retirement savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section (Split Layout) */}
      <section className="child-strategy-section">
        <div className="strategy-container">
          <div className="strategy-text">
            <h2>Our Blueprint for Your Child</h2>
            <div className="section-line"></div>
            <p>We don't sell generic "Child Plans". We build a custom financial architecture that secures their future, whether you are around or not.</p>
            
            <ul className="strategy-checklist">
              <li><span className="gold-check">✦</span> <strong>Target Calculation:</strong> We project the exact future cost of degrees (Domestic/International) adjusting for inflation.</li>
              <li><span className="gold-check">✦</span> <strong>Goal-Based SIPs:</strong> Allocating high-growth equity mutual funds specifically tagged to a 15-20 year timeline.</li>
              <li><span className="gold-check">✦</span> <strong>Risk Management:</strong> Shifting funds to safe debt instruments 3 years prior to the milestone to protect capital.</li>
              <li><span className="gold-check">✦</span> <strong>Parental Protection:</strong> Advising adequate Term Life Cover to ensure the education corpus is funded even in your absence.</li>
            </ul>
          </div>
          <div className="strategy-visual">
             <div className="glass-card">
                <h3>Calculate the Corpus</h3>
                <p>Curious about how much an MBA will cost in 2040? Let's sit down, run the numbers, and figure out the exact monthly investment you need to start today.</p>
                <a href="#contact" className="btn-gold-solid" style={{marginTop: '1.5rem', display: 'inline-block'}}>Book Free Assessment</a>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="child-faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Clear your doubts and start building their tomorrow, today.</p>
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

export default ChildPlan;