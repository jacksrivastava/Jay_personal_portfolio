import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { certifications, profile } from '../data/portfolioData';
import { PageHeading } from './Layout';
import { Link } from './Router';

/**
 * Renders the About narrative section detailing Jay’s dual background as a
 * Technology Consultant and AI Specialist across full-stack engineering, startups, and AI.
 *
 * @returns {React.ReactElement} About narrative section.
 */
function AboutNarrative() {
  return (
    <section className="about-section" id="about">
      <div className="wrap about-grid">
        <div className="about-visual">
          <div className="about-frame">
            <div className="about-sun" />
            <div className="about-orbit" />
            <span className="about-initials">
              J<span>.</span>
            </span>
            <span className="about-vertical">PUNE, INDIA · WORKING EVERYWHERE</span>
            <span className="about-flower">✳</span>
          </div>
          <div className="about-label">Systems thinking. Practical AI. Human-first craft.</div>
        </div>

        <div className="about-copy">
          <div className="eyebrow">
            01 <span className="eyebrow-line" /> Technology Consultant &amp; AI Specialist
          </div>
          <h2>
            Technology should
            <br />
            feel <em>like leverage.</em>
          </h2>
          <p>
            I’m Jay Kumar Srivastava, a Technology Consultant and AI Specialist based in Pune, India,
            working with founders, startups, and product teams worldwide.
          </p>
          <p>
            My work spans two complementary disciplines: engineering dependable websites, web &amp;
            mobile applications, startup architectures, and QA systems—and building practical AI
            automations, custom RAG pipelines, and domain-tuned models that remove repetitive work.
          </p>
          <p>
            With verified foundations across Python data analytics, SQL, API testing, and
            cybersecurity operations, I focus on solving root architectural bottlenecks rather than
            adding unnecessary complexity.
          </p>
          <div className="about-signoff">
            <span className="sign-line" />
            <span>Good systems start by understanding the work.</span>
          </div>
          <div className="about-actions">
            <a
              className="text-link about-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              More about me on LinkedIn <ArrowUpRight size={16} />
            </a>
            <Link className="text-link about-link" to="/contact">
              Discuss a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders the verified certifications grid sourced from Meta, Cisco Networking Academy,
 * HackerRank, and Coursera.
 *
 * @returns {React.ReactElement} Certifications showcase section.
 */
function Certifications() {
  return (
    <section className="section wrap cert-section">
      <div className="section-head">
        <div>
          <div className="eyebrow">
            Verified Credentials <span className="eyebrow-line" /> Learning in progress
          </div>
          <h2>
            Always staying
            <br />
            <em>curious.</em>
          </h2>
        </div>
        <p className="section-aside">
          Verified certifications across data analytics, problem-solving, API engineering, and
          cybersecurity operations.
        </p>
      </div>

      <div className="cert-grid">
        {certifications.map(([name, issuer, date, id], index) => (
          <article className="cert-card" key={name}>
            <div className="cert-top">
              <span className="cert-seal">
                <Check size={15} />
              </span>
              <span className="cert-date">{date}</span>
            </div>
            <h3>{name}</h3>
            <div className="cert-meta">
              <span>{issuer}</span>
              {id && <span className="cert-id">ID · {id}</span>}
            </div>
            <span className="cert-index">{String(index + 1).padStart(2, '0')}</span>
          </article>
        ))}
      </div>

      <a
        className="text-link cert-link"
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        See all certifications on LinkedIn <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

/**
 * Renders the About route page combining the page heading, narrative bio,
 * and verified certifications grid.
 *
 * @returns {React.ReactElement} Complete About route page.
 */
export default function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="About Jay · 03"
        title={
          <>
            Curiosity, with
            <br />
            <em>engineering rigor.</em>
          </>
        }
        detail="Technology Consultant & AI Specialist partnering with founders and teams to turn complex problems into scalable software and bounded AI workflows."
      />
      <AboutNarrative />
      <Certifications />
    </>
  );
}
