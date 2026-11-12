import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { engagementModels } from '../data/portfolioData';
import { PageHeading } from './Layout';
import PracticeFocus from './PracticeFocus';
import { Link } from './Router';

/**
 * Renders the three structured consulting and build engagement models
 * without numbered template counters.
 *
 * @returns {React.ReactElement} Engagement models section.
 */
function EngagementModels() {
  return (
    <section className="engagement-models wrap" aria-labelledby="engagement-heading">
      <div className="home-section-heading">
        <div>
          <div className="eyebrow">
            Ways to Work Together <span className="eyebrow-line" />
          </div>
          <h2 id="engagement-heading">
            Clear scope,
            <br />
            <em>steady delivery.</em>
          </h2>
        </div>
        <div className="home-section-aside">
          <p>
            Choose an engagement shape that fits where your team is today—from architecture clarity
            to full production delivery.
          </p>
        </div>
      </div>

      <div className="engagement-grid">
        {engagementModels.map((model) => (
          <article className="engagement-card" key={model.title}>
            <span className="engagement-cadence">{model.cadence}</span>
            <h3>{model.title}</h3>
            <p>{model.summary}</p>
            <ul className="engagement-highlights">
              {model.highlights.map((item) => (
                <li key={item}>
                  <Check size={14} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link className="bento-link" to={`/contact?topic=${model.topic}`}>
              Start with {model.title} <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

/**
 * Renders the Services route page combining the interactive Practice Focus,
 * engagement models, and custom scope CTA.
 *
 * @returns {React.ReactElement} Complete Services route page.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHeading
        eyebrow="Services · Consulting & AI"
        title={
          <>
            Software &amp; AI,
            <br />
            <em>shaped around your goals.</em>
          </>
        }
        detail="From startup MVPs, websites, and mobile or web applications to bounded AI automations and custom RAG models."
      />
      <PracticeFocus />
      <EngagementModels />
      <div className="route-cta wrap">
        <p>Have a technical challenge or AI initiative that needs a custom scope?</p>
        <Link className="button button-dark" to="/contact">
          Tell me what you need <ArrowUpRight size={15} />
        </Link>
      </div>
    </>
  );
}
