import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from './Router';

const PRACTICE_AREAS = [
  {
    id: 'web-apps',
    label: 'Web & App Engineering',
    topic: 'web-app-mvp',
    headline: 'Websites, web apps, and mobile products built to last.',
    description:
      'I design and engineer fast, accessible digital products—from founder-led brand sites to full-stack applications with clean APIs, reliable databases, and thoughtful interfaces.',
    deliverables: [
      'Responsive websites, SaaS dashboards, and mobile apps',
      'Full-stack architecture with TypeScript, React, Node.js, and PostgreSQL',
      'Performance optimization, clean component systems, and deployment',
    ],
    tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'ai-automation',
    label: 'AI Automations',
    topic: 'ai-automation',
    headline: 'Practical workflows that remove repetitive operational work.',
    description:
      'Rather than brittle scripts or black-box bots, I build structured AI automations with clear validation steps and human checkpoints so teams save hours without losing control.',
    deliverables: [
      'Multi-step agentic workflows for triage, routing, and reporting',
      'Human-in-the-loop approval gates for sensitive business actions',
      'Reliable integrations across CRMs, webhooks, and internal tools',
    ],
    tools: ['Python', 'Gemini API', 'Workflow Orchestration', 'REST / Webhooks'],
  },
  {
    id: 'custom-ai',
    label: 'Custom AI Models',
    topic: 'custom-ai-model',
    headline: 'Domain-adapted models and grounded retrieval for real data.',
    description:
      'When off-the-shelf prompts fall short, I build custom AI pipelines—combining retrieval-augmented generation, structured outputs, and evaluation harnesses tailored to your domain.',
    deliverables: [
      'Private RAG pipelines over documents, catalogs, and knowledge bases',
      'Custom model tuning, prompt evaluation, and latency optimization',
      'Grounded, citation-backed responses with predictable JSON schemas',
    ],
    tools: ['Gemini Models', 'Embeddings & RAG', 'Python', 'Vector Search'],
  },
  {
    id: 'advisory',
    label: 'Startup & Tech Advisory',
    topic: 'tech-consulting',
    headline: 'Hands-on problem solving when architecture or delivery stalls.',
    description:
      'I work alongside founders and engineering teams to untangle bottlenecks, scope realistic startup MVPs, introduce automated QA, and ship cleanly without unnecessary complexity.',
    deliverables: [
      'Technical architecture reviews and MVP scoping for early-stage startups',
      'Automated QA suites, CI reliability, and backend bottleneck fixes',
      'Direct engineering execution paired with clear documentation',
    ],
    tools: ['System Design', 'Redis', 'Selenium / JUnit', 'CI/CD', 'Linux'],
  },
];

/**
 * Renders a calm, editorial Practice & Capabilities switcher using hairline tabs
 * and generous whitespace instead of nested dashboard boxes.
 *
 * @returns {React.ReactElement} Interactive practice focus section.
 */
export default function PracticeFocus() {
  const [activeId, setActiveId] = useState(PRACTICE_AREAS[0].id);
  const activeArea = PRACTICE_AREAS.find((area) => area.id === activeId) || PRACTICE_AREAS[0];

  return (
    <section className="practice-focus wrap" id="practice" aria-labelledby="practice-heading">
      <div className="home-section-heading">
        <div>
          <div className="eyebrow">
            Practice &amp; Capabilities <span className="eyebrow-line" />
          </div>
          <h2 id="practice-heading">
            How I help teams
            <br />
            <em>build and solve.</em>
          </h2>
        </div>
        <div className="home-section-aside">
          <p>
            One technical partner across software engineering, startup architecture, and applied AI.
          </p>
          <Link className="home-inline-link" to="/services">
            Explore services <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="practice-tabs" role="tablist" aria-label="Consulting and AI practice areas">
        {PRACTICE_AREAS.map((area) => {
          const isSelected = area.id === activeArea.id;
          return (
            <button
              key={area.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={isSelected ? 'practice-tab is-active' : 'practice-tab'}
              onClick={() => setActiveId(area.id)}
            >
              {area.label}
            </button>
          );
        })}
      </div>

      <div className="practice-panel" role="tabpanel" aria-live="polite">
        <div className="practice-panel-main">
          <h3>{activeArea.headline}</h3>
          <p>{activeArea.description}</p>
          <Link className="text-link" to={`/contact?topic=${activeArea.topic}`}>
            Discuss {activeArea.label.toLowerCase()} <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="practice-panel-meta">
          <ul className="practice-deliverables">
            {activeArea.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="practice-tools" aria-label="Core technologies">
            {activeArea.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
