import React from 'react';

export default function Footer() {
  return (
    <footer className="footer glass-panel" aria-label="Site Footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-orb" aria-hidden="true"></div>
          <span className="logo-text" style={{fontWeight: 700, fontSize: '1.25rem', marginLeft: '0.5rem'}}>GABAnode Labs</span>
          <p className="footer-tagline">Systems-focused infrastructure for accessibility and compliance.</p>
        </div>
        <nav className="footer-links-grid" aria-label="Footer Navigation">
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal & Compliance</h3>
            <ul>
              <li><a href="/accessibility">Accessibility Statement</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <ul>
              <li><a href="mailto:admin@gabanodelab.com">Contact Lab</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GABAnode Labs LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
