import React from 'react';

export default function BentoGrid() {
  return (
    <main className="bento-container" id="main-content">
      {/* Essential SEO hidden text to maintain GEO performance while keeping visual minimalism */}
      <h1 className="sr-only">GABAnode Labs | Advanced System Architecture & Automation</h1>
      
      <div className="bento-grid">
        {/* Logo Tile (Large, Floating) */}
        <section className="bento-tile tile-logo hover-float animate-fade-up" style={{ animationDelay: '0.1s' }} aria-label="GABAnode Labs Brand">
          <div className="logo-3d-wrapper">
             <div className="mesh-gradient-bg"></div>
             <span className="logo-text">GABAnode<br/>Labs</span>
          </div>
        </section>

        {/* What We Do */}
        <section className="bento-tile tile-what animate-fade-up" style={{ animationDelay: '0.2s' }} aria-labelledby="what-title">
          <h2 id="what-title">What We Do</h2>
          <p>We build infrastructure systems that unify accessibility, compliance, and intelligent automation into synchronized operational frameworks.</p>
        </section>

        {/* How We Do It */}
        <section className="bento-tile tile-how animate-fade-up" style={{ animationDelay: '0.3s' }} aria-labelledby="how-title">
          <h2 id="how-title">How We Do It</h2>
          <p>A deterministic 5-stage pipeline: Detection, Interpretation, Execution, Validation, and Distribution. Guaranteed strict WCAG 2.2 AA heuristics and zero-knowledge execution.</p>
        </section>

        {/* Who We Are */}
        <section className="bento-tile tile-who animate-fade-up" style={{ animationDelay: '0.4s' }} aria-labelledby="who-title">
          <h2 id="who-title">Who We Are</h2>
          <p>Elite systems architects and compliance engineers building the next generation of generative engine infrastructure.</p>
        </section>

        {/* Why We're Different */}
        <section className="bento-tile tile-why animate-fade-up" style={{ animationDelay: '0.5s' }} aria-labelledby="why-title">
          <h2 id="why-title">Why We're Different</h2>
          <p>We don't sell disparate web tools or Chrome extension band-aids. We deploy fully integrated, highly-available compliance ecosystems engineered purely for structural integrity.</p>
        </section>

        {/* 4 Founder Bios */}
        <article className="bento-tile tile-bio tile-bio-1 animate-fade-up" style={{ animationDelay: '0.6s' }} aria-label="Founder KM">
          <div className="bio-initials">KM</div>
          <p className="bio-role">Systems</p>
        </article>
        <article className="bento-tile tile-bio tile-bio-2 animate-fade-up" style={{ animationDelay: '0.7s' }} aria-label="Founder JF">
          <div className="bio-initials">JF</div>
          <p className="bio-role">Engineering</p>
        </article>
        <article className="bento-tile tile-bio tile-bio-3 animate-fade-up" style={{ animationDelay: '0.8s' }} aria-label="Founder AC">
          <div className="bio-initials">AC</div>
          <p className="bio-role">Compliance</p>
        </article>
        <article className="bento-tile tile-bio tile-bio-4 animate-fade-up" style={{ animationDelay: '0.9s' }} aria-label="Founder CL">
          <div className="bio-initials">CL</div>
          <p className="bio-role">Architecture</p>
        </article>

        {/* Contact */}
        <section className="bento-tile tile-contact animate-fade-up" style={{ animationDelay: '1.0s' }} aria-label="Contact Information">
          <h2 className="sr-only">Contact Us</h2>
          <a href="mailto:systems@gabanodelabs.com" className="btn btn-primary btn-full">Initialize Contact</a>
        </section>
      </div>
    </main>
  );
}
