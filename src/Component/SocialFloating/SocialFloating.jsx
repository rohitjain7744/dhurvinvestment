import React, { useState } from 'react';
import './SocialFloating.css';

const SocialFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Update these links with your actual social media URLs
  const socialLinks = {
    whatsapp: "https://wa.me/918626062667", // Uses your contact number
    instagram: "https://instagram.com/yourprofile", 
    facebook: "https://facebook.com/yourprofile"
  };

  return (
    <div 
      className="floating-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Social Buttons that Pop Up */}
      <div className={`floating-menu ${isOpen ? 'is-open' : ''}`}>
        
        {/* Facebook */}
        <a href={"https://www.facebook.com/DhruvInvestmentsPune/"} target="_blank" rel="noreferrer" className="float-item fb-item" title="Facebook">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href={"https://www.instagram.com/dhruvinvestments/"} target="_blank" rel="noreferrer" className="float-item ig-item" title="Instagram">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.86 3.9 2.32 7.15 2.17 8.42 2.11 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 2.76.27.28 2.76.08 7.05.01 8.33 0 8.74 0 12s.01 3.67.08 4.95c.2 4.29 2.68 6.78 6.97 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.29-.2 6.78-2.68 6.98-6.97.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.29-2.68-6.78-6.97-6.98C15.67.01 15.26 0 12 0zm0 5.83a6.17 6.17 0 1 0 0 12.34 6.17 6.17 0 0 0 0-12.34zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm5.88-10.42a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
          </svg>
        </a>

        {/* WhatsApp */}
        <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="float-item wa-item" title="WhatsApp">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.47 16.2c-.17-.08-1-.49-1.15-.55-.15-.06-.26-.08-.37.08-.11.16-.43.55-.53.66-.1.11-.2.12-.37.03-1.17-.55-2.2-1.21-3.13-2.15-.71-.73-1.2-1.57-1.35-1.84-.04-.08 0-.14.04-.19.04-.04.09-.09.13-.14.04-.05.06-.08.08-.14.02-.05.01-.1-.01-.14-.02-.04-.37-.9-.51-1.24-.14-.32-.28-.28-.37-.28h-.32c-.11 0-.3.04-.46.2-.16.17-.61.6-.61 1.46 0 .86.63 1.69.72 1.81.09.12 1.23 1.88 2.98 2.64.42.18.75.29 1.01.37.42.13.8.11 1.1.07.34-.05 1-.41 1.14-.8.14-.4.14-.74.1-.8-.04-.08-.15-.12-.32-.2M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.48 1.34 5L1.5 22.5l5.65-1.48c1.47.8 3.12 1.22 4.87 1.22 5.51 0 10-4.48 10-10S17.53 2 12.02 2m0 18.25c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31A8.1 8.1 0 0 1 3.82 12c0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2s-3.68 8.2-8.2 8.2"/>
          </svg>
        </a>

      </div>

      {/* Main Floating Button */}
      <div className="main-float-btn">
        <svg 
          className={`chat-icon ${isOpen ? 'hide-icon' : ''}`} 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        
        <svg 
          className={`close-icon ${isOpen ? '' : 'hide-icon'}`} 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  );
};

export default SocialFloating;