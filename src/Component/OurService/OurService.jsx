import React from 'react';
import { Link } from 'react-router-dom'; // Link import karna zaroori hai
import './OurService.css';

const Services = () => {
  // Array of services (Added 'path' to each object)
  const serviceList = [
    { title: 'Mutual Fund', desc: 'Diversified portfolios managed by experts for long-term wealth growth.', icon: '📈', path: '/services/mutual-funds' },
    { title: 'SIP', desc: 'Systematic Investment Plans for disciplined, steady wealth accumulation.', icon: '🔄', path: '/services/mutual-funds' },
    { title: 'Real Estate', desc: 'Strategic property investments for capital appreciation and passive income.', icon: '🏢', path: '/services/real-estate' },
    { title: 'Term Insurance', desc: 'Pure life cover to secure your family’s financial future against uncertainties.', icon: '🛡️', path: '/services/term-insurance' },
    { title: 'Mediclaim', desc: 'Comprehensive health insurance solutions to cover unexpected medical emergencies.', icon: '🏥', path: '/services/mediclaim' },
    { title: 'Goal Setting', desc: 'Structured financial planning to help you achieve your specific life milestones.', icon: '🎯', path: '/services' },
    { title: 'Retirement / Pension', desc: 'Strategic planning to ensure a comfortable, independent, and secure retired life.', icon: '🌴', path: '/services/retirement' },
    { title: 'Child Education', desc: 'Dedicated funds planning to guarantee the best higher education for your children.', icon: '🎓', path: '/services/child-plan' },
    { title: 'Child Marriage', desc: 'Early financial preparation for significant and joyous family milestones.', icon: '💍', path: '/services/child-plan' },
    { title: 'Investment Review', desc: 'Periodic assessment and rebalancing to ensure your portfolio stays on track.', icon: '📊', path: '/services/portfolio-review' }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2 className="section-title">Comprehensive Financial Planning</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Tailored strategies across 10 core areas to protect and grow your wealth.
        </p>
      </div>

      <div className="services-grid">
        {serviceList.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            
            {/* ── Read More Button ── */}
            <Link to={service.path} className="read-more-btn">
              Explore Services <span className="arrow">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;