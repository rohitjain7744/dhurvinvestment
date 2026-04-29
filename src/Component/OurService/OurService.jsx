import React from 'react';
import './OurService.css';

const Services = () => {
  // Array of services based on the business card
  const serviceList = [
    { title: 'Mutual Fund', desc: 'Diversified portfolios managed by experts for long-term wealth growth.', icon: '📈' },
    { title: 'SIP', desc: 'Systematic Investment Plans for disciplined, steady wealth accumulation.', icon: '🔄' },
    { title: 'Real Estate', desc: 'Strategic property investments for capital appreciation and passive income.', icon: '🏢' },
    { title: 'Term Insurance', desc: 'Pure life cover to secure your family’s financial future against uncertainties.', icon: '🛡️' },
    { title: 'Mediclaim', desc: 'Comprehensive health insurance solutions to cover unexpected medical emergencies.', icon: '🏥' },
    { title: 'Goal Setting', desc: 'Structured financial planning to help you achieve your specific life milestones.', icon: '🎯' },
    { title: 'Retirement / Pension', desc: 'Strategic planning to ensure a comfortable, independent, and secure retired life.', icon: '🌴' },
    { title: 'Child Education', desc: 'Dedicated funds planning to guarantee the best higher education for your children.', icon: '🎓' },
    { title: 'Child Marriage', desc: 'Early financial preparation for significant and joyous family milestones.', icon: '💍' },
    { title: 'Investment Review', desc: 'Periodic assessment and rebalancing to ensure your portfolio stays on track.', icon: '📊' }
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;