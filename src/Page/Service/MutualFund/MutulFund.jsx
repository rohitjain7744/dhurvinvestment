import React, { useEffect } from 'react';
import Hero from '../MutualFund/Hero'; // Make sure this path is correct
import SIPCalculator from './SIPCalculator';
import './MutulFund.css'; // Importing the new premium CSS

const MutulFund = () => {
  // Ensure the page loads at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mutual-fund-page-wrapper">
      {/* Mutual Fund Hero Section */}
      <Hero />   
      
      {/* Wrapper to give the calculator proper spacing and background blending */}
      <div className="calculator-section-container">
        <SIPCalculator />
      </div>
    </div>
  );
};

export default MutulFund;