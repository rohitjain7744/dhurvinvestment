import React, { useEffect } from 'react';
import './Sip.css';
import { Link } from 'react-router-dom';

const SipPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sip-page-container">
      
      {/* ── 1. Hero Section ── */}
      <section className="sip-hero">
        <div className="sip-hero-content">
          <span className="sip-badge">Wealth Creation</span>
          <h1 className="sip-title">Systematic Investment <span className="gold-text">Plan (SIP)</span></h1>
          <p className="sip-desc">
            The smartest, most disciplined way to build long-term wealth. Start small, invest regularly, and let the power of compounding secure your financial future.
          </p>
          <a href="#consult" className="btn-gold-solid">Start Your SIP Today</a>
        </div>
      </section>

      {/* ── 2. What is SIP? ── */}
      <section className="sip-intro-section">
        <div className="sip-intro-grid">
          <div className="sip-intro-text">
            <h2>What exactly is an <span className="gold-text">SIP?</span></h2>
            <p>
              A Systematic Investment Plan (SIP) is a facility offered by mutual funds to investors to invest in a disciplined manner. Instead of a lump sum, you invest a fixed amount of money at regular intervals (usually monthly).
            </p>
            <p>
              It is similar to a recurring deposit, but your money is invested in the stock market or debt funds, offering the potential for significantly higher inflation-beating returns over the long term.
            </p>
          </div>
          <div className="sip-intro-stats">
            <div className="stat-box">
              <h3>₹500</h3>
              <p>Minimum starting amount per month</p>
            </div>
            <div className="stat-box">
              <h3>Flexible</h3>
              <p>Increase, pause, or stop anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Benefits of SIP (Grid) ── */}
      <section className="sip-benefits">
        <div className="section-header text-center">
          <h2>Why Choose <span className="gold-text">SIP?</span></h2>
          <p>The proven formula for stress-free investing.</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="b-icon">⚖️</div>
            <h3>Rupee Cost Averaging</h3>
            <p>You buy more units when the market is low and fewer when it's high. This automatically brings down your average cost per unit over time, eliminating the need to time the market.</p>
          </div>

          <div className="benefit-card">
            <div className="b-icon">📈</div>
            <h3>Power of Compounding</h3>
            <p>When you stay invested, you earn returns not just on your principal amount, but also on the accumulated profits. The longer you invest, the larger your wealth grows.</p>
          </div>

          <div className="benefit-card">
            <div className="b-icon">🎯</div>
            <h3>Financial Discipline</h3>
            <p>By automating your monthly investments, SIP ensures you save first and spend later. It instills a strong habit of saving without disrupting your monthly budget.</p>
          </div>

          <div className="benefit-card">
            <div className="b-icon">🛡️</div>
            <h3>Goal-Based Investing</h3>
            <p>Whether it's buying a house, children's education, or retirement, you can align different SIPs to specific life goals and track their progress effortlessly.</p>
          </div>
        </div>
      </section>

      {/* ── 4. The 8th Wonder: Compounding ── */}
      <section className="sip-compounding">
        <div className="compounding-content">
          <h2>The Magic of <span className="gold-text">Compounding</span></h2>
          <p>Albert Einstein famously called compound interest the 8th wonder of the world. "He who understands it, earns it... he who doesn't... pays it."</p>
          
          <div className="compounding-example">
            <h3>Example: ₹10,000 / month SIP at 12% expected return</h3>
            <ul>
              <li><strong>In 10 Years:</strong> You invest ₹12 Lakhs. Value becomes ~₹23 Lakhs.</li>
              <li><strong>In 20 Years:</strong> You invest ₹24 Lakhs. Value becomes ~₹1 Crore.</li>
              <li><strong>In 30 Years:</strong> You invest ₹36 Lakhs. Value becomes <span className="gold-text">~₹3.5 Crores.</span></li>
            </ul>
            <p className="note">*Mutual fund investments are subject to market risks. Returns are not guaranteed.</p>
          </div>
        </div>
      </section>

      {/* ── 5. Call to Action ── */}
      <section id="consult" className="sip-cta-section">
        <div className="cta-box">
          <h2>Ready to start your wealth creation journey?</h2>
          <p>Book a free portfolio review with Mr. Jitendra Nikam. We will help you choose the right mutual funds tailored to your risk profile and life goals.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-gold-solid">Book Free Consultation</Link>
            <a href="https://wa.me/918626062667" target="_blank" rel="noreferrer" className="btn-outline-gold">WhatsApp Us</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SipPage;