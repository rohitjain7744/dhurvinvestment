import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "IT Professional, Pune",
    feedback: "Jitendra sir completely transformed how I look at my savings. His SIP and Mutual Fund strategies helped me build a solid corpus without feeling any pinch in my monthly budget. Highly transparent and trustworthy!",
    rating: 5
  },
  {
    id: 2,
    name: "Sneha & Amit Desai",
    role: "Business Owners",
    feedback: "We were very confused about Term Insurance and Mediclaim. Mr. Nikam explained everything in simple terms and helped us secure a ₹2 Crore cover that perfectly fits our family's needs. Exceptional service.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Milind Kulkarni",
    role: "Surgeon",
    feedback: "As a doctor, I have very little time to track markets. Dhruv Investments manages my entire retirement portfolio. Their regular reviews and unbiased advice give me complete peace of mind about my golden years.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testi-container">
        
        {/* Section Header */}
        <div className="testi-header">
          <span className="testi-eyebrow">— Client Feedback</span>
          <h2>Stories of Trust & Growth</h2>
          <div className="testi-line"></div>
          <p>Don't just take our word for it. Here is what our clients have to say about their financial journey with Dhruv Investments.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="testi-grid">
          {testimonialsData.map((client) => (
            <div className="testi-card" key={client.id}>
              {/* Star Rating */}
              <div className="stars">
                {"★".repeat(client.rating)}
              </div>
              
              {/* Feedback Text */}
              <p className="feedback-text">"{client.feedback}"</p>
              
              {/* Client Info */}
              <div className="client-info">
                <div className="client-avatar">
                  {client.name.charAt(0)} {/* Shows first letter of name */}
                </div>
                <div>
                  <h4 className="client-name">{client.name}</h4>
                  <span className="client-role">{client.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;