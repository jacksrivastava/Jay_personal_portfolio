import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from './Router';

/**
 * Renders the refined, editorial homepage hero with Jay's positioning as a
 * Technology Consultant and AI Specialist, clean typography, two primary actions,
 * and an uncluttered portrait frame.
 *
 * @returns {React.ReactElement} Editorial hero section.
 */
export default function HeroSection() {
  return (
    <section className="home-hero wrap" id="home">
      <svg className="hero-signature" viewBox="0 0 1200 260" aria-hidden="true">
        <text x="50%" y="65%" textAnchor="middle">
          Jay Kumar Srivastava
        </text>
      </svg>

      <div className="home-hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span className="status-dot" />
          Technology Consultant &amp; AI Specialist
          <span className="eyebrow-line" />
        </div>

        <h1>
          Thoughtful software,
          <br />
          <em>practical AI,</em> built cleanly.
        </h1>

        <p>
          I’m Jay Kumar Srivastava. I work with founders, startups, and teams to design and ship
          websites, mobile and web apps, custom AI models, and automations that solve real
          problems.
        </p>

        <div className="hero-ctas">
          <Link className="button button-dark cta-primary" to="/#selected-work">
            See selected work <ArrowDown size={16} />
          </Link>
          <Link className="text-link cta-secondary" to="/contact">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="home-hero-art">
        <div className="pixel-portrait" role="img" aria-label="Portrait of Jay Kumar Srivastava">
          <img
            className="jay-pixel-photo"
            src="/images/jay-pixel-portrait.png"
            alt="Jay Kumar Srivastava"
            draggable="false"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
