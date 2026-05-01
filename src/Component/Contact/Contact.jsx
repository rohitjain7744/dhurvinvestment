import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Naya state API loading ke liye

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms Payload
    const payload = {
      access_key: "3ad92f93-4515-48d8-8f11-24e9c554b51f", // <-- Yahan apni Web3Forms API key daalein
      subject: `New Enquiry from ${formData.name} - ${formData.service}`, // Email ka subject
      name: formData.name,
      phone: formData.phone,
      email: formData.email || "Not Provided",
      service: formData.service,
      message: formData.message
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form Submitted: ", result);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        }, 3000);
      } else {
        alert("Something went wrong while sending your message. Please try again.");
        console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-header">
          <span className="contact-eyebrow">— Get In Touch</span>
          <h2>Start Your Financial Journey</h2>
          <div className="contact-line"></div>
          <p>Have questions about your investments or need a personalised financial plan? Drop us a message and Mr. Nikam will get back to you shortly.</p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h3>Visit Our Office</h3>
                <p>Office No. 117, Kahinoor B- Zone,<br/>Near Vijay Sales, Chinchwad,<br/>Pune - 411033</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p><a href="tel:+918626062667">+91 86260 62667</a></p>
                <p><a href="tel:+917385530667">+91 73855 30667</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:Finserv.dhruv@gmail.com">Finserv.dhruv@gmail.com</a></p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="success-message">
                <h3>Thank You!</h3>
                <p>Your message has been received. We will contact you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="" disabled>Select a Service</option>
                    <option value="Mutual Funds">Mutual Funds & SIP</option>
                    <option value="Term Insurance">Term Insurance</option>
                    <option value="Real Estate">Real Estate Advisory</option>
                    <option value="Retirement Planning">Retirement Planning</option>
                    <option value="Portfolio Review">Portfolio Review</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea name="message" rows="4" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;