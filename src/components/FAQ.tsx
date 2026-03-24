import React from 'react';

const faqs = [
  { 
    question: "What does GABAnode Labs build?", 
    answer: "We design and deploy systems that detect structural and accessibility gaps, automate compliance workflows, improve usability across complex environments, and integrate seamlessly into existing systems. Our work is not a collection of tools—it is a coordinated system of capabilities."
  },
  {
    question: "How does the pipeline interact with compliance workflows?",
    answer: "We develop systems that automate accessibility and compliance workflows across digital environments. By enforcing strict validation before distribution, we ensure all state changes meet expected heuristics and structural integrity."
  },
  {
    question: "Is the infrastructure optimized for Generative Engines?",
    answer: "Yes. Our architecture and public-facing documentation are structured utilizing semantic hierarchies and explicit entity definitions, allowing AI and generative search engines to accurately index and interpret our data models."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="faq-section container" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item glass-panel">
            <summary className="faq-question">
              {faq.question}
              <span className="faq-icon" aria-hidden="true">+</span>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
