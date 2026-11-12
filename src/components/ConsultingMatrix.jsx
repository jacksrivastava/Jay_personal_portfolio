import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { consultingPillars } from '../data/portfolioData';
import { Link } from './Router';

/**
 * Renders the asymmetric two-pillar Consulting & Engineering Bento Matrix covering
 * Technology Consulting (websites, apps, startups, problem-solving) and
 * AI Solutions (agentic workflows, custom AI models, RAG & Gemini integrations).
 *
 * @returns {React.ReactElement} Two-pillar consulting bento matrix section.
 */
export default function ConsultingMatrix() {
  return (
    <section className="bento-matrix" id="capabilities" aria-labelledby="matrix-heading">
      <div className="wrap">
        <div className="home-section-heading">
          <div>
            <div className="eyebrow">
              02 · Consulting &amp; AI Practice <span className="eyebrow-line" />
            </div>
            <h2 id="matrix-heading">
              Two practices,
              <br />
              <em>one engineering partner.</em>
            </h2>
          </div>
          <div className="home-section-aside">
            <p>
              Whether you need a startup MVP shipped cleanly or a custom AI workflow built with
              guardrails, every engagement pairs architectural clarity with hands-on execution.
            </p>
            <Link className="home-inline-link" to="/services">
              View engagement models <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="bento-pillars">
          {consultingPillars.map((pillar) => (
            <div className="bento-pillar" key={pillar.id}>
              <div className="bento-pillar-head">
                <div>
                  <span className="eyebrow">
                    {pillar.eyebrow} <span className="eyebrow-line" />
                  </span>
                  <h3>{pillar.title}</h3>
                </div>
                <p>{pillar.summary}</p>
              </div>

              <div className="bento-grid">
                {pillar.cards.map((card) => (
                  <article
                    className={card.featured ? 'bento-card is-featured' : 'bento-card'}
                    key={card.id}
                  >
                    <div className="bento-card-top">
                      <span>{card.number}</span>
                      <span>{card.featured ? 'CORE FOCUS' : 'SPECIALTY'}</span>
                    </div>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                    <ul className="bento-deliverables">
                      {card.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="bento-tags">
                      {card.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <Link className="bento-link" to={`/contact?topic=${card.topic}`}>
                      Inquire <ArrowUpRight size={15} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
