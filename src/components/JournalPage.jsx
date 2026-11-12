import React, { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { stories, storyImage, storySlug } from '../data/portfolioData';
import { Link } from './Router';

/**
 * Renders a single journal field-note card with editorial cover artwork, reading time,
 * category badge, and SPA navigation to the full essay route.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.story - Story entry from `portfolioData`.
 * @param {boolean} [props.compact=false] - Uses compact card sizing for homepage and related rails.
 * @returns {React.ReactElement} Rendered journal card element.
 */
export function JournalCard({ story, compact = false }) {
  const url = `/journal/${storySlug(story)}`;
  return (
    <article className={compact ? 'journal-card journal-card-compact' : 'journal-card'}>
      <Link className="journal-card-image" to={url} aria-label={`Read ${story.title}`}>
        <img src={storyImage(story)} alt="" loading="lazy" />
      </Link>
      <div className="journal-card-copy">
        <div className="journal-card-meta">
          <span>{story.time}</span>
          <span>{story.project}</span>
        </div>
        <h3>
          <Link to={url}>{story.title}</Link>
        </h3>
        <p>{story.summary}</p>
        <Link className="journal-card-read" to={url}>
          Read story <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}

/**
 * Renders the full Journal index page including masthead, featured field note,
 * topic shelves, interactive category filters, and story archive grid.
 *
 * @returns {React.ReactElement} Complete Journal index view.
 */
function JournalIndex() {
  const [filter, setFilter] = useState('All notes');
  const filters = ['All notes', 'AI & automation', 'Project stories', 'Engineering'];
  const featured = stories.find((s) => s.no === '01') || stories[0];
  const topics = [
    {
      name: 'AI & automation',
      note: 'Practical ideas for making everyday work lighter.',
      stories: stories.filter((s) => s.category === 'AI & automation'),
    },
    {
      name: 'Project stories',
      note: 'A closer look at the choices behind the work.',
      stories: stories.filter((s) => s.category === 'Project stories'),
    },
    {
      name: 'Engineering',
      note: 'Tools, systems and the craft of making them dependable.',
      stories: stories.filter((s) => s.category === 'Engineering'),
    },
  ];

  const visible =
    filter === 'All notes' ? stories : stories.filter((s) => s.category === filter);

  /**
   * Builds the canonical article route path for a story object.
   *
   * @param {Object} story - Story entry object.
   * @returns {string} Internal `/journal/:slug` route path.
   */
  const storyUrl = (story) => `/journal/${storySlug(story)}`;

  return (
    <div className="journal-page">
      <section className="journal-masthead">
        <div className="wrap journal-masthead-inner">
          <div className="eyebrow">
            <span className="status-dot" /> Journal · Notes from the work{' '}
            <span className="eyebrow-line" />
          </div>
          <div className="journal-title-row">
            <h1>
              Thoughts in
              <br />
              <em>the making.</em>
            </h1>
            <div className="journal-intro">
              <p>
                Ideas, lessons and useful details from building digital experiences, working with
                AI, and making technology feel a little more human.
              </p>
              <a href="#journal-feature" className="text-link">
                Start with the latest <ArrowDown size={15} />
              </a>
            </div>
          </div>
          <div className="journal-rule">
            <span>PROJECTS &amp; IDEAS</span>
            <span>{stories.length} STORIES</span>
            <span>UPDATED AS I LEARN</span>
          </div>
        </div>
      </section>

      <section className="journal-feature wrap" id="journal-feature">
        <Link
          className="journal-feature-image"
          to={storyUrl(featured)}
          aria-label={`Read ${featured.title}`}
        >
          <img
            src={storyImage(featured)}
            alt="Illustrated workflow showing an AI agent handling routine tasks while a person reviews the outcome"
          />
          <span className="journal-feature-image-caption">
            A HUMAN CHECKPOINT, BUILT INTO THE FLOW
          </span>
        </Link>
        <article className="journal-feature-copy">
          <div className="feature-meta">
            <span>{featured.category}</span>
            <span>{featured.time}</span>
          </div>
          <span className="feature-number">FEATURED NOTE / {featured.no}</span>
          <h2>
            <Link to={storyUrl(featured)}>{featured.title}</Link>
          </h2>
          <p>{featured.lead}</p>
          <Link className="journal-read-button" to={storyUrl(featured)}>
            Read the essay <ArrowUpRight size={15} />
          </Link>
          <div className="feature-bottom">
            <span>FIELD NOTE</span>
            <span>
              {featured.no} / {String(stories.length).padStart(2, '0')}
            </span>
          </div>
        </article>
      </section>

      <section className="journal-topics">
        <div className="wrap">
          <div className="journal-section-heading">
            <div>
              <span className="journal-kicker">Follow a thread</span>
              <h2>
                Browse by <em>interest.</em>
              </h2>
            </div>
            <p>Start with a subject, then follow it into the projects and details behind it.</p>
          </div>
          <div className="journal-topic-grid">
            {topics.map((topic) => (
              <section className="journal-topic" key={topic.name}>
                <div className="journal-topic-heading">
                  <div>
                    <span>{String(topic.stories.length).padStart(2, '0')} NOTES</span>
                    <h3>{topic.name}</h3>
                  </div>
                  <p>{topic.note}</p>
                </div>
                <div className="journal-topic-stories">
                  {topic.stories.slice(0, 2).map((story) => (
                    <Link key={story.no} to={storyUrl(story)}>
                      <span>{story.title}</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="journal-latest" id="journal-index">
        <div className="wrap">
          <div className="journal-section-heading">
            <div>
              <span className="journal-kicker">The notebook</span>
              <h2>
                {filter === 'All notes' ? (
                  <>
                    Latest <em>notes.</em>
                  </>
                ) : (
                  <>
                    {filter}
                    <em>.</em>
                  </>
                )}
              </h2>
            </div>
            <p>Project write-ups and practical thinking from work in progress.</p>
          </div>

          <div className="journal-filters" role="group" aria-label="Filter journal posts">
            {filters.map((item) => {
              const count =
                item === 'All notes'
                  ? stories.length
                  : stories.filter((s) => s.category === item).length;
              return (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? 'filter-active' : ''}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                  <span>{count}</span>
                </button>
              );
            })}
          </div>

          <div className="journal-card-grid">
            {visible.map((story) => (
              <JournalCard key={story.no} story={story} />
            ))}
          </div>

          <div className="journal-endnote">
            <span>✳</span>
            <p>A living notebook. More notes as the work and the questions grow.</p>
            <Link to="/contact">
              Have a question or a project? <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Renders a full single-essay article page for a selected journal story,
 * including cover visual, prose body, optional project link, and related essays.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.story - Active journal story object.
 * @returns {React.ReactElement} Rendered article layout.
 */
function JournalArticlePage({ story }) {
  const related = stories
    .filter(
      (item) =>
        item.no !== story.no &&
        (item.category === story.category || item.project === story.project),
    )
    .slice(0, 2);

  return (
    <article className="journal-article-page">
      <div className="journal-article-top wrap">
        <Link to="/journal" className="journal-back-link">
          <ArrowRight size={15} /> All notes
        </Link>
        <span>
          {story.category} <i>·</i> {story.time}
        </span>
      </div>

      <header className="journal-article-header wrap">
        <span className="journal-kicker">
          FIELD NOTE {story.no} / {String(stories.length).padStart(2, '0')}
        </span>
        <h1>{story.title}</h1>
        <p>{story.lead || story.summary}</p>
        <div className="journal-article-byline">
          <span>Jay Kumar Srivastava</span>
          <span>{story.project}</span>
        </div>
      </header>

      <figure className="journal-article-cover wrap">
        <img src={storyImage(story)} alt="Editorial illustration for this story" />
        <figcaption>{story.project} · Notes from the work</figcaption>
      </figure>

      <div className="journal-article-body">
        <div className="journal-article-prose">
          {story.body.map((paragraph, index) => (
            <p key={`${story.no}-p-${index}`}>{paragraph}</p>
          ))}
          {story.link && (
            <a
              className="article-project-link"
              href={story.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {story.linkLabel || 'Explore the project'} <ArrowUpRight size={16} />
            </a>
          )}
          <div className="article-author">
            <span className="article-monogram">
              J<span>.</span>
            </span>
            <div>
              <strong>A note from Jay</strong>
              <p>
                Technology Consultant &amp; AI Specialist building digital products, startup
                architectures, and practical AI workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="journal-related">
          <div className="wrap">
            <div className="journal-section-heading">
              <div>
                <span className="journal-kicker">Keep reading</span>
                <h2>
                  More from this <em>thread.</em>
                </h2>
              </div>
              <Link className="text-link" to="/journal">
                All notes <ArrowRight size={15} />
              </Link>
            </div>
            <div className="journal-card-grid journal-related-grid">
              {related.map((item) => (
                <JournalCard key={item.no} story={item} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="journal-article-contact">
        <p>Have a useful question or a project in mind?</p>
        <Link to="/contact">
          Let’s talk <ArrowUpRight size={16} />
        </Link>
      </section>
    </article>
  );
}

/**
 * Route controller for `/journal` and `/journal/:slug`, rendering either the
 * article view or the journal index depending on whether `story` is provided.
 *
 * @param {Object} props - Component properties.
 * @param {Object|null} [props.story] - Matched journal story for detail routes.
 * @returns {React.ReactElement} Journal page or essay view.
 */
export default function JournalPage({ story = null }) {
  return story ? <JournalArticlePage story={story} /> : <JournalIndex />;
}
