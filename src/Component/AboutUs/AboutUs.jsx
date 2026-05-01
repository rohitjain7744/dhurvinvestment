import React from 'react';
import './AboutUs.css';
import Photo from "../../assets/Photo.jpg"

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-grid">
          
          {/* Left Side: Image & Badge */}
          <div className="about-visual">
            <div className="image-wrapper">
              {/* Replace the background color/gradient with an actual <img> tag when you have the photo */}
              <div className="founder-image-placeholder">
                <img src={Photo} alt="Mr. Jitendra Nikam" />
              </div>
              
              {/* Floating Experience Badge */}
              <div className="experience-badge">
                <span className="badge-number">10+</span>
                <span className="badge-text">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content & Story */}
          <div className="about-content">
            <span className="about-eyebrow">— Meet Your Advisor</span>
            <h2>Mr. Jitendra Nikam</h2>
            <div className="about-line"></div>
            
            <h4 className="about-role">Founder & Lead Financial Planner</h4>
            
            <p className="about-bio">
              With a profound understanding of the Indian financial markets, Mr. Jitendra Nikam founded Dhruv Investments with a single vision: to provide transparent, unbiased, and goal-oriented financial planning to every household.
            </p>
            <p className="about-bio">
              We believe that wealth creation is not about chasing the highest returns, but about disciplined investing, managing risks, and protecting your family's future. Our holistic approach ensures that your money works as hard as you do.
            </p>

            <ul className="about-highlights">
              <li>
                <span className="check-icon">✔</span>
                <span><strong>Certified Expertise:</strong> Deep knowledge in Mutual Funds & Insurance.</span>
              </li>
              <li>
                <span className="check-icon">✔</span>
                <span><strong>Client-First Approach:</strong> Strategies tailored to your unique life goals.</span>
              </li>
              <li>
                <span className="check-icon">✔</span>
                <span><strong>Long-Term Partnership:</strong> We stay with you through every market cycle.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Impact Stats */}
        <div className="about-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy Families</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>₹50Cr+</h3>
            <p>Assets Guided</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Dedicated Support</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;