import React, { useState } from 'react';
import './SIPCalculator.css';

const SIPCalculator = () => {
  // Initial States
  const [investment, setInvestment] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  // SIP Calculation Logic
  const calculateSIP = () => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    
    // SIP Formula
    const futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvested = investment * months;
    const estimatedReturns = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      futureValue: Math.round(futureValue)
    };
  };

  const results = calculateSIP();

  // Helper to format numbers nicely (e.g., ₹ 5,00,000)
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="sip-section" id="calculator">
      <div className="sip-container">
        
        <div className="sip-header">
          <h2>SIP Returns Calculator</h2>
          <div className="header-line"></div>
          <p>Estimate your wealth creation over time.</p>
        </div>

        <div className="sip-grid">
          {/* Controls Panel */}
          <div className="sip-controls">
            
            <div className="input-group">
              <div className="label-row">
                <label>Monthly Investment</label>
                <div className="slider-value">{formatCurrency(investment)}</div>
              </div>
              <input 
                type="range" 
                className="premium-slider"
                min="500" max="100000" step="500" 
                value={investment} 
                onChange={(e) => setInvestment(Number(e.target.value))} 
              />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Expected Return Rate (p.a)</label>
                <div className="slider-value">{rate}%</div>
              </div>
              <input 
                type="range" 
                className="premium-slider"
                min="1" max="30" step="0.5" 
                value={rate} 
                onChange={(e) => setRate(Number(e.target.value))} 
              />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Time Period (Years)</label>
                <div className="slider-value">{years} Years</div>
              </div>
              <input 
                type="range" 
                className="premium-slider"
                min="1" max="40" step="1" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))} 
              />
            </div>

          </div>

          {/* Results Panel */}
          <div className="sip-results">
            <div className="result-card">
              <p>Invested Amount</p>
              <h3 className="result-value">{formatCurrency(results.totalInvested)}</h3>
            </div>
            <div className="result-card border-gold">
              <p>Est. Returns</p>
              <h3 className="result-value text-gold">{formatCurrency(results.estimatedReturns)}</h3>
            </div>
            <div className="result-card highlight-card">
              <p className="dark-text">Total Value</p>
              <h3 className="total-value dark-text">{formatCurrency(results.futureValue)}</h3>
            </div>
            <a href="#contact" className="btn-gold-solid invest-btn">Invest Now</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SIPCalculator;