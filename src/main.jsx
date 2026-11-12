import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import JournalPage from './components/JournalPage';
import { Footer, Header, NotFound, Pet } from './components/Layout';
import { usePathname } from './components/Router';
import ServicesPage from './components/ServicesPage';
import WorkPage from './components/WorkPage';
import { stories, storySlug } from './data/portfolioData';
import './styles.css';

const ROUTE_TITLES = {
  '/': 'Technology Consultant & AI Specialist',
  '/work': 'Selected Work & Systems',
  '/services': 'Consulting & AI Services',
  '/about': 'About Jay',
  '/journal': 'Field Notes & Journal',
  '/contact': 'Book a Consultation',
};

/**
 * Reads the persisted color theme preference safely from `localStorage`.
 *
 * @returns {'light'|'dark'} Initial theme preference.
 */
function getInitialTheme() {
  try {
    return localStorage.getItem('jay-portfolio-theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

/**
 * Root application shell managing theme synchronization, dynamic document titles,
 * client-side SPA routing, and persistent layout chrome (`Header`, `Footer`, `Pet`).
 *
 * @returns {React.ReactElement} Complete rendered application shell.
 */
function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const path = usePathname();
  const slug = path.startsWith('/journal/') ? path.split('/').pop() : null;
  const article = slug ? stories.find((item) => storySlug(item) === slug) : null;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#181917' : '#f6f4ef');
    try {
      localStorage.setItem('jay-portfolio-theme', theme);
    } catch {
      // Ignore storage errors in restricted browsing modes
    }
  }, [theme]);

  useEffect(() => {
    const pageTitle = article ? article.title : ROUTE_TITLES[path] || 'Page not found';
    document.title = `${pageTitle} — Jay Kumar Srivastava`;
  }, [path, article]);

  let page;
  if (path === '/') {
    page = <HomePage />;
  } else if (path === '/work') {
    page = <WorkPage />;
  } else if (path === '/services') {
    page = <ServicesPage />;
  } else if (path === '/about') {
    page = <AboutPage />;
  } else if (path === '/journal') {
    page = <JournalPage />;
  } else if (path.startsWith('/journal/') && article) {
    page = <JournalPage story={article} />;
  } else if (path === '/contact') {
    page = <ContactPage />;
  } else {
    page = <NotFound />;
  }

  return (
    <div className="app-shell site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      />
      <main id="main">{page}</main>
      <Footer />
      <Pet />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
