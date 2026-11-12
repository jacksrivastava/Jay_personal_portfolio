import React, { useState } from 'react';
import {
  ArrowUpRight,
  Home as HomeIcon,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { profile } from '../data/portfolioData';
import { Link, usePathname } from './Router';

/**
 * Renders the inline LinkedIn brand icon SVG.
 *
 * @returns {React.ReactElement} LinkedIn vector icon.
 */
export function LinkedInMark() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

/**
 * Renders the inline GitHub brand icon SVG.
 *
 * @returns {React.ReactElement} GitHub vector icon.
 */
export function GitHubMark() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.68.08-.68 1.14.08 1.75 1.17 1.75 1.17 1.01 1.73 2.66 1.23 3.31.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.44.11-3 0 0 .96-.3 3.08 1.16A10.7 10.7 0 0 1 12 6.08c.96 0 1.92.13 2.82.38 2.12-1.45 3.07-1.16 3.07-1.16.62 1.56.23 2.71.12 3 .73.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.3-5.16 5.59.4.34.76 1.02.76 2.06v3.07c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

/**
 * Renders the sticky site navigation header with SPA links, active state indicators,
 * responsive mobile drawer toggle, and light/dark theme switcher.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.theme - Active color theme (`'light'` or `'dark'`).
 * @param {Function} props.onToggleTheme - Callback to toggle between light and dark themes.
 * @returns {React.ReactElement} Site header element.
 */
export function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const current = usePathname();
  const links = [
    ['Home', '/'],
    ['Work', '/work'],
    ['Services', '/services'],
    ['About', '/about'],
    ['Journal', '/journal'],
  ];

  /**
   * Determines whether a nav route should appear active, including nested journal articles.
   *
   * @param {string} href - Target route path.
   * @returns {boolean} True when the route matches the active pathname.
   */
  const isRouteActive = (href) => {
    if (href === '/') return current === '/';
    return current === href || current.startsWith(`${href}/`);
  };

  return (
    <header className="header">
      <Link
        className="wordmark"
        to="/"
        aria-label="Jay Kumar Srivastava, home"
        onClick={() => setOpen(false)}
      >
        <span className="monogram">
          J<span>.</span>
        </span>
        <span>
          Jay Kumar
          <br />
          Srivastava
        </span>
      </Link>

      <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {links.map(([label, href]) => {
          const active = isRouteActive(href);
          return (
            <Link
              key={label}
              to={href}
              className={active ? 'nav-link nav-current is-active' : 'nav-link'}
              aria-current={active ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          );
        })}
        <Link
          className={
            current === '/contact'
              ? 'nav-contact nav-current is-active'
              : 'nav-contact'
          }
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={15} />
        </Link>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

/**
 * Renders the global site footer with brand mark, social links, and back-to-top anchor.
 *
 * @returns {React.ReactElement} Site footer element.
 */
export function Footer() {
  return (
    <footer className="footer wrap">
      <Link className="wordmark footer-brand" to="/" aria-label="Jay Kumar Srivastava, home">
        <span className="monogram">
          J<span>.</span>
        </span>
        <span>
          Jay Kumar
          <br />
          Srivastava
        </span>
      </Link>
      <div className="footer-center">
        Technology Consulting &amp; AI Systems<span>✳</span>
      </div>
      <div className="footer-right">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <LinkedInMark />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <GitHubMark />
        </a>
        <a href="#main" aria-label="Back to content">
          <ArrowUpRight size={17} />
        </a>
      </div>
      <span className="copyright">© {new Date().getFullYear()} Jay Kumar Srivastava</span>
    </footer>
  );
}

/**
 * Renders the interactive corner companion widget displaying a brief engineering philosophy note.
 *
 * @returns {React.ReactElement} Floating companion button and note popover.
 */
export function Pet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="pet-wrap pet">
      <span
        id="pet-note"
        className={open ? 'pet-note pet-note-open' : 'pet-note'}
        role="status"
      >
        A tiny reminder: great AI and software always make room for people.
      </span>
      <button
        className="pet-button"
        type="button"
        aria-label={open ? 'Hide the note' : 'Show a little note'}
        aria-expanded={open}
        aria-controls="pet-note"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="pet-face" aria-hidden="true">
          <i />
          <i />
        </span>
        <Sparkles className="pet-spark" size={13} aria-hidden="true" />
      </button>
    </div>
  );
}

/**
 * Renders a standardized editorial heading banner for secondary routes.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.eyebrow - Short uppercase section kicker text.
 * @param {React.ReactNode} props.title - Primary H1 heading content.
 * @param {string} [props.detail] - Optional supporting subtitle copy.
 * @returns {React.ReactElement} Rendered page heading element.
 */
export function PageHeading({ eyebrow, title, detail }) {
  return (
    <div className="page-heading page-head wrap">
      <div className="eyebrow">
        {eyebrow}
        <span className="eyebrow-line" />
      </div>
      <h1>{title}</h1>
      {detail && <p>{detail}</p>}
    </div>
  );
}

/**
 * Renders the 404 fallback view when no client-side route matches the current pathname.
 *
 * @returns {React.ReactElement} Not-found fallback section.
 */
export function NotFound() {
  return (
    <section className="not-found wrap">
      <HomeIcon size={25} />
      <div className="eyebrow">
        A little off the map <span className="eyebrow-line" />
      </div>
      <h1>
        This page
        <br />
        <em>isn’t here.</em>
      </h1>
      <Link className="button button-dark" to="/">
        Back to home <ArrowUpRight size={15} />
      </Link>
    </section>
  );
}
