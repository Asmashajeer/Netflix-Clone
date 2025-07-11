import React, { useState } from 'react';

import "./Footer.css";
import footerLinks from './FooterLinks';






export default function Footer() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); 

 return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="contact-section">
          <p>
            Questions? Call{' '}
            <a href="tel:800-032-0481" className="contact-link">
              800-032-0481
            </a>
          </p>
        </div>

        {/* Links Grid */}
        <div className="links-grid">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="links-column">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="footer-link"
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Language Selector
        <div className="language-section">
          <div className="language-selector">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="language-button"
            >
              <GlobeIcon />
              English
              <ChevronDownIcon isOpen={isLanguageOpen} />
            </button>
            
            {isLanguageOpen && (
              <div className="language-dropdown">
                <a href="#" className="language-option">
                  English
                </a>
                <a href="#" className="language-option">
                  العربية
                </a>
              </div>
            )}
          </div>
        </div> */}

        {/* Location */}
        <div className="location-section">
          Netflix United Arab Emirates
        </div>
      </div>
    </footer>
  );
}