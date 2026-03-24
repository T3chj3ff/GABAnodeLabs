import React from 'react';

const summaryPoints = [
  {
    pill: "01. The Challenge",
    title: "Structural Gaps",
    description: "Fragmented digital environments create systemic accessibility gaps and unforeseen compliance liabilities at scale."
  },
  {
    pill: "02. Our Position",
    title: "Unified Frameworks",
    description: "We don't sell disparate tools. We unify accessibility, compliance, and intelligent automation into synchronized operational frameworks."
  },
  {
    pill: "03. The Method",
    title: "Deterministic Execution",
    description: "A proprietary 5-stage pipeline capable of deep structural interpretation, semantic mapping, and rigorous state validation."
  },
  {
    pill: "04. The Outcome",
    title: "Validated Automation",
    description: "High-capability automated workflows consistently benchmarked against strict WCAG 2.2 AA heuristics and safety bounds."
  }
];

export default function ExecutiveSummary() {
  return (
    <section className="tldr-section container" aria-labelledby="tldr-title">
      <div className="tldr-header animate-fade-up">
        <h2 id="tldr-title" className="section-title">Executive Overview</h2>
        <p className="section-subtitle">A high-level summary of the GABAnode Labs operational thesis.</p>
      </div>
      <div className="tldr-grid">
        {summaryPoints.map((point, index) => (
          <div key={point.pill} className={`tldr-card glass-panel animate-fade-up`} style={{ animationDelay: `${(index + 1) * 0.15}s` }}>
            <span className="tldr-pill">{point.pill}</span>
            <h3 className="tldr-card-title">{point.title}</h3>
            <p className="tldr-card-desc">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
