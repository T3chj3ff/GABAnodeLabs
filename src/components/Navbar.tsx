import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar glass-panel">
      <div className="container nav-content">
        <div className="nav-brand" aria-label="GABAnode Labs Home">
          <div className="logo-orb" aria-hidden="true"></div>
          <span className="logo-text">GABAnode Labs</span>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#what-title">What</a></li>
            <li><a href="#who-title">Who</a></li>
            <li><a href="mailto:admin@gabanodelab.com" className="btn btn-primary btn-sm">Contact Lab</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
