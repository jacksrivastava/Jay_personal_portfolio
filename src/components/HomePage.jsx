import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { stories, works } from '../data/portfolioData';
import HeroSection from './HeroSection';
import { JournalCard } from './JournalPage';
import PracticeFocus from './PracticeFocus';
import { Link } from './Router';
import { WorkCard } from './WorkPage';

const SYSTEM_FILTERS = [
  'All Highlights',
  'AI & Models',
  'Web & Platforms',
  'Systems & QA',
];

/**
 * Renders the filterable Selected Work showcase on the homepage without overlay clutter.
 *
 * @returns {React.ReactElement} Filterable selected work section.
 */
function FeaturedSystems() {
  const [activeFilter, setActiveFilter] = useState('All Highlights');

  // Curate top 6 works covering web platforms, AI models, backend, and QA automation.
  const highlightedWorks = works.slice(0, 6);
  const visibleWorks =
    activeFilter === 'All Highlights'
      ? highlightedWorks
      : highlightedWorks.filter((work) => work.filterGroup === activeFilter);

  return (
    <section
      className="featured-systems wrap"
      id="selected-work"
      aria-labelledby="featured-systems-heading"
    >
      <div className="home-section-heading">
        <div>
          <div className="eyebrow">
            Selected Work <span className="eyebrow-line" />
          </div>
          <h2 id="featured-systems-heading">
            Recent systems
            <br />
            <em>in production.</em>
          </h2>
        </div>
        <div className="home-section-aside">
          <p>
            Client platforms, Gemini-powered tools, distributed backends, and automated testing
            frameworks.
          </p>
          <Link className="home-inline-link" to="/work">
            View all {works.length} projects <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div
        className="system-filters"
        role="tablist"
        aria-label="Filter featured engineering systems"
      >
        {SYSTEM_FILTERS.map((filterName) => {
          const isSelected = activeFilter === filterName;
          return (
            <button
              key={filterName}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={isSelected ? 'filter-pill is-active' : 'filter-pill'}
              onClick={() => setActiveFilter(filterName)}
            >
              {filterName}
            </button>
          );
        })}
      </div>

      <div className="systems-grid">
        {visibleWorks.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}

/**
 * Renders the 3-card engineering field notes preview on the homepage.
 *
 * @returns {React.ReactElement} Homepage journal section.
 */
function HomeJournal() {
  const featuredNotes = stories.filter((s) => ['01', '06', '07'].includes(s.no));

  return (
    <section className="home-journal" aria-labelledby="home-journal-heading">
      <div className="wrap">
        <div className="home-section-heading">
          <div>
            <div className="eyebrow">
              Field Notes <span className="eyebrow-line" />
            </div>
            <h2 id="home-journal-heading">
              Notes from
              <br />
              <em>the work.</em>
            </h2>
          </div>
          <div className="home-section-aside">
            <p>
              Writing on AI workflows, product decisions, and building dependable software.
            </p>
            <Link className="home-inline-link" to="/journal">
              Read the journal <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="home-journal-grid">
          {featuredNotes.map((story) => (
            <JournalCard key={story.no} story={story} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Renders a quiet, direct closing invitation linking to the consultation form.
 *
 * @returns {React.ReactElement} Homepage closing CTA section.
 */
function ConsultationCTA() {
  return (
    <section className="consultation-cta wrap" aria-labelledby="consultation-heading">
      <div className="consultation-cta-inner">
        <span className="eyebrow">
          Get in Touch <span className="eyebrow-line" />
        </span>
        <h2 id="consultation-heading">
          Have a product or AI challenge
          <br />
          <em>worth building well?</em>
        </h2>
        <p>
          Share a brief note on what you’re working on—whether it’s a website, mobile app, startup
          MVP, or custom AI automation.
        </p>

        <Link className="button button-dark cta-primary" to="/contact">
          Start a conversation <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

/**
 * Composes the 5-section editorial homepage:
 * HeroSection -> PracticeFocus -> FeaturedSystems -> HomeJournal -> ConsultationCTA.
 *
 * @returns {React.ReactElement} Complete Home route page.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PracticeFocus />
      <FeaturedSystems />
      <HomeJournal />
      <ConsultationCTA />
    </>
  );
}
