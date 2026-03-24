"use client";

import React, { useState } from 'react';

const tabs = [
  { id: 'thesis', label: '01. Core Thesis' },
  { id: 'pipeline', label: '02. The Pipeline' },
  { id: 'heuristics', label: '03. Validation' },
  { id: 'faq', label: '04. Framework FAQ' }
];

export default function InteractiveConsole() {
  const [activeTab, setActiveTab] = useState('thesis');

  return (
    <section className="interactive-console-section container" aria-label="GABAnode Labs Interactive Pitch Deck">
      <div className="console-wrapper glass-panel">
        <nav className="console-nav" aria-label="Pitch Deck Navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`console-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="console-content" role="tabpanel">
           {activeTab === 'thesis' && (
             <div className="tab-pane animate-fade-up">
               <h3 className="pane-title">We build infrastructure, not tools.</h3>
               <p className="pane-desc">Fragmented digital environments create systemic accessibility gaps and unforeseeable compliance liabilities.</p>
               <p className="pane-desc">We do not sell disparate PDF tools or Chrome extensions as band-aids. We design and deploy intelligent systems that unify accessibility, rigorous WCAG 2.2 compliance, and deterministic automation into synchronized operational frameworks.</p>
               <ul className="pane-list">
                 <li>Detect structural and accessibility gaps</li>
                 <li>Automate compliance workflows cross-environment</li>
                 <li>Integrate seamlessly into existing systems</li>
               </ul>
             </div>
           )}

           {activeTab === 'pipeline' && (
             <div className="tab-pane animate-fade-up">
               <h3 className="pane-title">The 5-Stage Deterministic Pipeline</h3>
               <p className="pane-desc">A proprietary architecture capable of deep structural interpretation, semantic mapping, and strict state validation.</p>
               <div className="pipeline-grid">
                 <div className="pipeline-step"><span className="step-num">01.</span> Detection & Ingestion</div>
                 <div className="pipeline-step"><span className="step-num">02.</span> Semantic Interpretation</div>
                 <div className="pipeline-step"><span className="step-num">03.</span> Deterministic Execution</div>
                 <div className="pipeline-step"><span className="step-num">04.</span> Systematic Validation</div>
                 <div className="pipeline-step"><span className="step-num">05.</span> Asynchronous Distribution</div>
               </div>
             </div>
           )}

           {activeTab === 'heuristics' && (
             <div className="tab-pane animate-fade-up">
               <h3 className="pane-title">Rigorous Structural Validation</h3>
               <p className="pane-desc">Our 4th pipeline stage guarantees that execution outputs strictly conform to predefined heuristics and legal compliance standards.</p>
               <div className="metrics-grid">
                 <div className="metric-card">
                   <div className="metric-value">100+</div>
                   <div className="metric-label">Automated structural checks executed locally</div>
                 </div>
                 <div className="metric-card">
                   <div className="metric-value">31</div>
                   <div className="metric-label">WCAG 2.2 AA Criteria Evaluated</div>
                 </div>
                 <div className="metric-card">
                   <div className="metric-value">Zero</div>
                   <div className="metric-label">Shared Secrets Transmitted (ZKP)</div>
                 </div>
               </div>
             </div>
           )}

           {activeTab === 'faq' && (
             <div className="tab-pane animate-fade-up">
               <h3 className="pane-title">Frequently Asked Questions</h3>
               <div className="faq-mini">
                 <p className="faq-q"><strong>Is this infrastructure optimized for Generative Engines?</strong></p>
                 <p className="faq-a">Yes. Our architecture utilizes explicit semantic hierarchies, allowing AI engines to accurately interpret our models.</p>
                 
                 <p className="faq-q"><strong>Do I piecemeal components?</strong></p>
                 <p className="faq-a">No. Our work is a coordinated ecosystem of capabilities that automate workflows securely across digital environments.</p>
               </div>
             </div>
           )}
        </div>
      </div>
    </section>
  );
}
