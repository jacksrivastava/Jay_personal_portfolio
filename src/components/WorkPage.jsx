import React, { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { stories, storySlug, workDisciplines, works } from '../data/portfolioData';
import { Link } from './Router';

/**
 * Extracts a clean display hostname from an external URL without throwing on malformed input.
 *
 * @param {string|null} url - External live site URL.
 * @returns {string} Hostname label for browser chrome bar.
 */
function getDisplayHost(url) {
  if (!url) return 'github.com/jacksrivastava';
  try {
    return new URL(url).hostname;
  } catch {
    return 'production.local';
  }
}

/**
 * Renders the publication-grade editorial masthead for the Work page.
 *
 * @returns {React.ReactElement} Rendered masthead header element.
 */
function WorkMasthead() {
  return (
    <section className="work-masthead">
      <div className="wrap work-masthead-inner">
        <div className="eyebrow">
          <span className="status-dot" /> Selected Work · Digital craft &amp; engineering{' '}
          <span className="eyebrow-line" />
        </div>
        <div className="work-title-row">
          <h1>
            Work made for
            <br />
            <em>the real world.</em>
          </h1>
          <div className="work-intro">
            <p>
              Client websites, custom AI systems, distributed backends, and QA automation frameworks
              built with architectural rigor.
            </p>
            <a href="#work-feature" className="text-link">
              Explore flagship project <ArrowDown size={15} />
            </a>
          </div>
        </div>
        <div className="work-rule">
          <span>COMMISSIONED &amp; OPEN SOURCE</span>
          <span>{works.length} SELECTED WORKS</span>
          <span>LIVE IN PRODUCTION</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Renders the flagship featured project in a split-hero layout with browser chrome preview,
 * impact narrative, key technologies, and direct action links.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.work - Featured work data object to spotlight.
 * @returns {React.ReactElement|null} Rendered flagship spotlight section or null.
 */
function WorkFeatureSpotlight({ work }) {
  if (!work) return null;
  const targetStory = work.storyNo ? stories.find((s) => s.no === work.storyNo) : null;
  const storyUrl = targetStory ? `/journal/${storySlug(targetStory)}` : null;

  return (
    <section className="work-feature wrap" id="work-feature">
      <div className="work-feature-visual">
        <div className="work-browser-bar">
          <span />
          <span />
          <span />
          <b>{getDisplayHost(work.live)}</b>
        </div>
        <img src={work.image} alt={`Preview of ${work.name}`} loading="eager" />
      </div>

      <article className="work-feature-copy">
        <div className="work-feature-meta">
          <span>{work.category}</span>
          <span>Live System</span>
        </div>
        <h2>
          {work.live ? (
            <a href={work.live} target="_blank" rel="noopener noreferrer">
              {work.name}
            </a>
          ) : (
            work.name
          )}
        </h2>
        <p className="work-feature-lead">{work.lead}</p>
        <p className="work-feature-desc">{work.description}</p>
        <div className="work-feature-tags">
          {work.tech.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="work-feature-actions">
          {work.live && (
            <a
              className="button button-dark"
              href={work.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live website <ArrowUpRight size={15} />
            </a>
          )}
          {storyUrl && (
            <Link className="text-link" to={storyUrl}>
              Read project story <ArrowRight size={15} />
            </Link>
          )}
        </div>
        <div className="work-feature-bottom">
          <span>Client Production</span>
          <span>{work.discipline}</span>
        </div>
      </article>
    </section>
  );
}

/**
 * Renders curated thematic discipline shelves allowing visitors to jump straight
 * into Web & Platforms, AI & Automation, or Systems & Engineering.
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.disciplines - Discipline shelf definitions.
 * @param {Function} props.onSelectDiscipline - Callback invoked with the selected filter key.
 * @returns {React.ReactElement} Rendered thematic discipline shelves section.
 */
function WorkDisciplines({ disciplines, onSelectDiscipline }) {
  return (
    <section className="work-shelves">
      <div className="wrap">
        <div className="work-section-heading">
          <div>
            <span className="work-kicker">Follow a thread</span>
            <h2>
              Browse by <em>discipline.</em>
            </h2>
          </div>
          <p>Explore client brand platforms, autonomous AI workflows, and open infrastructure.</p>
        </div>
        <div className="work-shelf-grid">
          {disciplines.map((discipline) => (
            <section className="work-shelf" key={discipline.name}>
              <div className="work-shelf-heading">
                <div>
                  <span>{discipline.count}</span>
                  <h3>{discipline.name}</h3>
                </div>
                <p>{discipline.note}</p>
              </div>
              <div className="work-shelf-links">
                {discipline.items.map((itemName) => (
                  <button
                    key={itemName}
                    type="button"
                    className="work-shelf-item-link"
                    onClick={() => onSelectDiscipline(discipline.filterKey)}
                  >
                    <span>{itemName}</span>
                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Renders a single project card with browser chrome framing, glassmorphic badge,
 * technology stack tags, external repo/live links, and optional SPA journal link.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.work - Project details object from `portfolioData`.
 * @returns {React.ReactElement} Rendered project card element.
 */
export function WorkCard({ work }) {
  const targetStory = work.storyNo ? stories.find((s) => s.no === work.storyNo) : null;
  const storyUrl = targetStory ? `/journal/${storySlug(targetStory)}` : null;
  const primaryUrl = work.live || work.source || '#';

  return (
    <article className="work-card">
      <a
        className="work-card-visual"
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${work.name}`}
      >
        <div className="work-browser-bar">
          <span />
          <span />
          <span />
          <b>{getDisplayHost(work.live)}</b>
        </div>
        <img src={work.image} alt={work.name} loading="lazy" />
      </a>

      <div className="work-card-copy">
        <div className="work-card-meta">
          <span>{work.category}</span>
          <span>{work.discipline}</span>
        </div>
        <h3>
          <a href={primaryUrl} target="_blank" rel="noopener noreferrer">
            {work.name}
          </a>
        </h3>
        <p>{work.description}</p>
        <div className="work-card-tags">
          {work.tech.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="work-card-footer">
          {work.live && (
            <a href={work.live} target="_blank" rel="noopener noreferrer">
              Live site <ArrowUpRight size={14} />
            </a>
          )}
          {/* {work.source && (
            <a href={work.source} target="_blank" rel="noopener noreferrer">
              Repository <ArrowUpRight size={14} />
            </a>
          )} */}
          {storyUrl && (
            <Link to={storyUrl} className="work-card-story-link">
              Field note <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * Renders the Work route page with editorial masthead, flagship spotlight,
 * discipline shelves, interactive category filter tabs, and project catalog grid.
 *
 * @returns {React.ReactElement} Complete Work route page.
 */
export default function WorkPage() {
  const [filter, setFilter] = useState('All work');
  const filters = ['All work', 'Client website', 'AI & Automation', 'Engineering'];
  const featured = works.find((w) => w.featured) || works[0];

  const visibleWorks =
    filter === 'All work' ? works : works.filter((w) => w.type === filter);

  /**
   * Filters the catalog by discipline and scrolls smoothly to the catalog section.
   *
   * @param {string} filterKey - Filter category matching `work.type`.
   * @returns {void}
   */
  const handleSelectDiscipline = (filterKey) => {
    setFilter(filterKey);
    const catalogElement = document.getElementById('work-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="work-page">
      <WorkMasthead />
      <WorkFeatureSpotlight work={featured} />
      <WorkDisciplines
        disciplines={workDisciplines}
        onSelectDiscipline={handleSelectDiscipline}
      />

      <section className="work-catalog" id="work-catalog">
        <div className="wrap">
          <div className="work-section-heading">
            <div>
              <span className="work-kicker">The archive</span>
              <h2>
                {filter === 'All work' ? (
                  <>
                    Selected <em>works.</em>
                  </>
                ) : (
                  <>
                    {filter === 'Client website' ? 'Client' : filter} <em>projects.</em>
                  </>
                )}
              </h2>
            </div>
            <p>Production deployments, open source tools, and practical agentic implementations.</p>
          </div>

          <div className="work-filters" role="group" aria-label="Filter portfolio works">
            {filters.map((item) => {
              const count =
                item === 'All work'
                  ? works.length
                  : works.filter((w) => w.type === item).length;
              return (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? 'filter-active' : ''}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item === 'Client website' ? 'Client websites' : item}
                  <span>{count}</span>
                </button>
              );
            })}
          </div>

          <div className="work-card-grid">
            {visibleWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>

          <div className="work-endnote">
            <span>✳</span>
            <p>Thoughtfully made, designed to last. Looking to build something useful?</p>
            <Link to="/contact">
              Start a conversation <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
