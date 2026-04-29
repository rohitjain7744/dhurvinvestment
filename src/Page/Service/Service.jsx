import React, { useState, useEffect } from 'react';
import './Service.css';

// The data array extracted from your script tag
const servicesData = [
  {
    title: 'Mutual Fund', icon: '📈', cat: 'wealth', tag: 'Wealth Growth',
    desc: 'Professionally managed, diversified investment portfolios designed to maximise long-term wealth creation across equity, debt, and hybrid categories.',
    features: ['SEBI-regulated fund selection', 'Equity, debt & hybrid options', 'Regular performance reporting', 'Tax-efficient fund selection (ELSS)', 'No lock-in for most open-ended funds']
  },
  {
    title: 'SIP', icon: '🔄', cat: 'wealth', tag: 'Disciplined Investing',
    desc: 'Systematic Investment Plans allow you to invest a fixed amount each month, harnessing the power of rupee cost averaging and compounding over time.',
    features: ['Start from ₹500/month', 'Automate your wealth-building habit', 'Rupee cost averaging reduces risk', 'Flexible amount and frequency', 'Easy pause or stop anytime']
  },
  {
    title: 'Real Estate', icon: '🏢', cat: 'wealth', tag: 'Capital Appreciation',
    desc: 'Strategic residential and commercial property investment guidance to generate capital appreciation, rental income, and long-term wealth diversification.',
    features: ['Location analysis & due diligence', 'Rental yield projections', 'RERA-compliant project selection', 'Portfolio diversification with property', 'NRI investment advisory']
  },
  {
    title: 'Term Insurance', icon: '🛡️', cat: 'protection', tag: 'Life Cover',
    desc: 'Pure-term life insurance that provides your family with a large sum assured at the lowest possible premium, protecting them from financial uncertainty.',
    features: ['Coverage up to ₹5 crore+', 'Low premium, high cover ratio', 'Critical illness add-on riders', 'Claim settlement ratio guidance', 'Multi-company comparison included']
  },
  {
    title: 'Mediclaim', icon: '🏥', cat: 'protection', tag: 'Health Shield',
    desc: 'Comprehensive health insurance solutions — individual, family floater, and senior citizen plans — to ensure zero financial disruption during medical emergencies.',
    features: ['Cashless hospitalisation network', 'Family floater & individual plans', 'Senior citizen cover available', 'No sub-limit plans identified', 'Pre-existing disease coverage guidance']
  },
  {
    title: 'Goal Setting', icon: '🎯', cat: 'planning', tag: 'Life Blueprint',
    desc: 'A structured financial planning framework that maps your income, savings, and investments to clearly defined life milestones and timelines.',
    features: ['Short, medium & long-term goals', 'Risk profiling & time horizon mapping', 'Goal-linked fund allocation', 'Inflation-adjusted target planning', 'Annual goal progress review']
  },
  {
    title: 'Retirement / Pension', icon: '🌴', cat: 'planning', tag: 'Golden Years',
    desc: 'Comprehensive retirement corpus planning using NPS, pension funds, annuities, and systematic withdrawal plans to ensure a comfortable, independent retired life.',
    features: ['NPS account setup & advisory', 'Annuity plan comparison', 'Corpus size calculation', 'Post-retirement income planning', 'Tax benefits under Section 80C/80CCD']
  },
  {
    title: 'Child Education', icon: '🎓', cat: 'planning', tag: 'Future Ready',
    desc: 'Dedicated education fund planning using SIPs, child plans, and goal-based mutual funds to guarantee the best higher education for your children.',
    features: ['Education inflation-adjusted corpus', 'Child plan vs mutual fund comparison', 'Targeted fund for graduation/PG', "Lock-in aligned to child's milestones", 'Tax-efficient structuring']
  },
  {
    title: 'Child Marriage', icon: '💍', cat: 'planning', tag: 'Milestone Fund',
    desc: "Early financial preparation through long-term systematic investing to accumulate wealth for your child's marriage — a significant and joyous family milestone.",
    features: ['10–20 year horizon planning', 'Equity-heavy early, debt-heavy later', 'Target corpus calculation', 'Celebration fund + emergency buffer', 'Annual review & rebalancing']
  },
  {
    title: 'Investment Review', icon: '📊', cat: 'wealth', tag: 'Portfolio Health',
    desc: 'Periodic assessment, benchmarking, and rebalancing of your entire investment portfolio to eliminate underperformers and ensure your goals remain on track.',
    features: ['Comprehensive portfolio audit', 'Asset allocation check', 'Fund performance benchmarking', 'Tax loss harvesting guidance', 'Clear action-item report']
  }
];

const ServicesDark = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  // Filter the services based on the active button
  const filteredServices = servicesData.filter(
    (s) => activeFilter === 'all' || s.cat === activeFilter
  );

  // Handle closing modal with Escape key and locking body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };

    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  // Handle click outside modal to close
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedService(null);
    }
  };

  return (
    <div className="dark-theme-wrapper">
      {/* NOTE: Since you already have a global Navbar and Footer in App.jsx, 
        you may want to delete this <nav> and <footer> block if they conflict. 
        I have left them here to ensure a 1:1 match with your provided code.
      */}
  
      {/* HERO BANNER */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <span className="hero-eyebrow">— What We Offer</span>
          <h1>Financial Services <em>Crafted</em> for Your Life</h1>
          <div className="hero-line"></div>
          <p>From wealth creation to family protection, our 10 core service pillars are designed to cover every dimension of your financial journey — expertly guided by Mr. Jitendra Nikam.</p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <span className="filter-label">Filter</span>
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('all')}
        >All Services</button>
        <button 
          className={`filter-btn ${activeFilter === 'wealth' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('wealth')}
        >Wealth</button>
        <button 
          className={`filter-btn ${activeFilter === 'protection' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('protection')}
        >Protection</button>
        <button 
          className={`filter-btn ${activeFilter === 'planning' ? 'active' : ''}`} 
          onClick={() => setActiveFilter('planning')}
        >Life Planning</button>
      </div>

      {/* SERVICES GRID */}
      <main className="services-main">
        <div className="section-intro">
          <span className="eyebrow">10 Core Pillars</span>
          <h2>Comprehensive Financial Planning</h2>
          <div className="underline-rule"></div>
          <p>Tailored strategies to protect, grow, and sustain your wealth across every milestone of life.</p>
        </div>

        <div className="grid">
          {filteredServices.map((s, index) => (
            <div 
              key={s.title} 
              className="s-card" 
              onClick={() => setSelectedService(s)}
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="card-icon">{s.icon}</div>
              <span className="card-tag">{s.tag}</span>
              <div className="card-title">{s.title}</div>
              <p className="card-desc">{s.desc}</p>
              <span className="card-cta">
                Learn more 
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="section-intro" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
            <span className="eyebrow">How It Works</span>
            <h2>Our 4-Step Advisory Process</h2>
            <div className="underline-rule" style={{ marginLeft: 'auto', marginRight: 'auto', background: 'linear-gradient(90deg,transparent,var(--gold),transparent)' }}></div>
            <p>A structured, transparent approach to understanding and growing your financial life.</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-title">Discovery Meeting</div>
              <p className="step-desc">We understand your goals, risk appetite, income, and life milestones in a free, no-obligation consultation.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-title">Custom Blueprint</div>
              <p className="step-desc">We craft a personalised financial plan mapping each service to your specific goals and timeline.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-title">Execution</div>
              <p className="step-desc">We implement the plan — SIPs, insurance, real estate, or pensions — with full paperwork support.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-title">Ongoing Review</div>
              <p className="step-desc">Periodic portfolio reviews and rebalancing to keep you on track as life evolves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-inner">
          <h2>Ready to Secure Your Financial Future?</h2>
          <p>Book a free, no-obligation consultation with Mr. Jitendra Nikam and get a personalised roadmap built around your life goals.</p>
          <div className="cta-buttons">
            <a href="tel:+918626062667" className="btn-gold">Call Now — Free Consult</a>
            <a href="mailto:info@dhruvinvestments.com" className="btn-outline">Send an Enquiry</a>
          </div>
        </div>
      </section>


      {/* MODAL OVERLAY */}
      <div 
        className={`modal-overlay ${selectedService ? 'open' : ''}`} 
        onClick={handleOverlayClick}
      >
        <div className="modal">
          <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>
          
          {selectedService && (
            <>
              <div className="modal-icon">{selectedService.icon}</div>
              <span className="modal-tag">{selectedService.tag}</span>
              <h2>{selectedService.title}</h2>
              <p className="modal-body">{selectedService.desc}</p>
              <ul className="modal-features">
                {selectedService.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="tel:+918626062667" className="modal-btn">Get Started — Free Call</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesDark;