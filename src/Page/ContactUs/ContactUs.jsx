import React, { useState } from 'react';
import './ContactUs.css';

/* ── Contact metadata ── */
const CONTACT_INFO = [
  {
    icon: '📞',
    label: 'Phone / WhatsApp',
    value: '+91 86260 62667',
    href: 'tel:+918626062667',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@dhruvinvestments.com',
    href: 'Finserv.dhruv@gmail.com',
  },
  {
    icon: '📍',
    label: 'Office',
    value: 'office No.117, kahinoor B-zone Near Vijay Sales, Chinchwad Pune-411033, India',
    href: 'https://maps.google.com/?q=Nashik,Maharashtra',
  },
  {
    icon: '🕐',
    label: 'Working Hours',
    value: 'Mon – Sat, 9:00 AM – 7:00 PM',
    href: null,
  },
];

const SERVICES_LIST = [
  'Select a Service',
  'Mutual Fund & SIP',
  'Term Insurance',
  'Mediclaim / Health Insurance',
  'Real Estate Investment',
  'Child Education Planning',
  'Child Marriage Planning',
  'Retirement / Pension Planning',
  'Portfolio / Investment Review',
  'Goal Setting & Financial Plan',
  'Other',
];

/* ── Validate ── */
const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Full name is required';
  if (!fields.phone.trim()) errors.phone = 'Phone number is required';
  else if (!/^[6-9]\d{9}$/.test(fields.phone.replace(/\s/g, '')))
    errors.phone = 'Enter a valid 10-digit Indian mobile number';
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'Enter a valid email address';
  if (!fields.service || fields.service === 'Select a Service')
    errors.service = 'Please select a service';
  return errors;
};

/* ── Component ── */
const Contact = () => {
  const [fields, setFields] = useState({
    name: '', phone: '', email: '', service: '', message: '', consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFields((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    // Simulate API call — replace with your actual submission logic
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1600);
  };

  return (
    <div className="contact-page">

      {/* ── Hero Banner ── */}
      <section className="contact-hero">
        <div className="hero-inner">
          <span className="hero-eyebrow">— Reach Out to Us</span>
          <h1>Let's Begin Your <em>Financial Journey</em></h1>
          <div className="hero-rule" />
          <p>
            Whether you have a question about mutual funds, insurance, or retirement planning —
            Mr. Jitendra Nikam is here to guide you. Book a free consultation today.
          </p>
        </div>
      </section>

      {/* ── Main Body ── */}
      <div className="contact-body">

        {/* LEFT — Info Panel */}
        <aside className="contact-info">
          <span className="panel-label">Get in Touch</span>
          <h2>We'd Love to<br />Hear from You</h2>
          <div className="info-rule" />
          <p>
            Reach us through any of the channels below. We typically respond within
            a few hours on working days.
          </p>

          {/* Contact Items */}
          <div className="contact-items">
            {CONTACT_INFO.map((item, i) =>
              item.href ? (
                <a key={i} href={item.href} className="contact-item" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <div className="ci-icon">{item.icon}</div>
                  <div className="ci-content">
                    <span className="ci-label">{item.label}</span>
                    <span className="ci-value">{item.value}</span>
                  </div>
                </a>
              ) : (
                <div key={i} className="contact-item" style={{ cursor: 'default' }}>
                  <div className="ci-icon">{item.icon}</div>
                  <div className="ci-content">
                    <span className="ci-label">{item.label}</span>
                    <span className="ci-value">{item.value}</span>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Availability badge */}
          <div className="availability">
            <div className="avail-dot" />
            <div className="avail-text">
              <strong>Currently accepting new clients.</strong> Free 30-minute
              consultation available — no obligation.
            </div>
          </div>

          {/* Social */}
          <div className="social-strip">
            <a href="https://wa.me/918626062667" className="social-btn" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
            <a href="tel:+918626062667" className="social-btn">
              📞 Call Direct
            </a>
            <a href="mailto:info@dhruvinvestments.com" className="social-btn">
              ✉ Email Us
            </a>
          </div>
        </aside>

        {/* RIGHT — Form Panel */}
        <div className="contact-form-wrap">
          <h2 className="form-heading">Send Us a Message</h2>
          <p className="form-sub">
            Fill in the form and we'll get back to you within 24 hours on business days.
          </p>

          {/* Success State */}
          <div className={`form-success ${submitted ? 'visible' : ''}`}>
            <div className="success-icon">✅</div>
            <h3>Message Received!</h3>
            <p>
              Thank you, {fields.name.split(' ')[0] || 'there'}. Mr. Nikam will reach out to you
              at <strong>{fields.phone}</strong> within 24 hours.
            </p>
          </div>

          {/* Form */}
          {!submitted && (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              {/* Row 1 — Name + Phone */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Rajesh Sharma"
                    value={fields.name} onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  <span className={`field-error ${errors.name ? 'visible' : ''}`}>{errors.name}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number *</label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="98765 43210"
                    value={fields.phone} onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  <span className={`field-error ${errors.phone ? 'visible' : ''}`}>{errors.phone}</span>
                </div>
              </div>

              {/* Row 2 — Email + Service */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="rajesh@example.com"
                    value={fields.email} onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  <span className={`field-error ${errors.email ? 'visible' : ''}`}>{errors.email}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service" name="service"
                    value={fields.service} onChange={handleChange}
                    className={errors.service ? 'error' : ''}
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s === 'Select a Service' ? '' : s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className={`field-error ${errors.service ? 'visible' : ''}`}>{errors.service}</span>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message" name="message"
                  placeholder="Tell us about your financial goals, current investments, or any questions you have…"
                  value={fields.message} onChange={handleChange}
                />
              </div>

              {/* Consent */}
              <div className="consent-row">
                <input
                  type="checkbox" id="consent" name="consent"
                  checked={fields.consent} onChange={handleChange}
                />
                <span>
                  I agree to be contacted by Dhruv Investments regarding my enquiry.
                  Your information is kept private and never shared.
                </span>
              </div>

              {/* Submit */}
              <button type="submit" className="submit-btn" disabled={submitting || !fields.consent}>
                <div className="btn-shimmer" />
                <span>
                  {submitting ? 'Sending…' : 'Send Message — Free Consultation'}
                </span>
              </button>

            </form>
          )}
        </div>
      </div>

      {/* ── Map Strip ── */}
      <div className="map-strip">
        <span className="map-label">— Find Us</span>
        <div className="map-frame">
          <iframe
            title="Dhruv Investments Location — Nashik"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238052.46255987668!2d73.63621565!3d19.9974533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba5c3b18dad%3A0x9f60e42a282a8d23!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
};

export default Contact;