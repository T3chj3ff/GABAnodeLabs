import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section container" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-content animate-fade-up">
          <div className="pill delay-1">
            <span className="pill-dot" aria-hidden="true"></span>
            {' Intelligent Infrastructure'}
          </div>
          <h1 id="hero-title" className="hero-heading delay-2">
            Integrated Systems for<br />
            <span className="text-gradient">Accessibility & Compliance</span>
          </h1>
          <p className="hero-description delay-3">
            GABAnode Labs builds integrated systems that unify accessibility, compliance, and intelligence into a single operational framework.
          </p>
          <div className="hero-actions delay-3">
            <a href="#architecture" className="btn btn-primary">Explore Our Pipeline</a>
            <a href="#faq" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-up delay-2">
          <div className="glow-backdrop" aria-hidden="true"></div>
          <div className="glass-morphic-image glass-panel">
            <img src="/images/media__1774335722556.jpg" alt="Abstract rendering of GABAnode Labs system nodes" />
            <div className="floating-badge badge-1">
              <span className="status-dot"></span> System Optimal
            </div>
            <div className="floating-badge badge-2">
              <span style={{ color: "var(--color-primary)"}}>⚡</span> 0.02ms Latency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
