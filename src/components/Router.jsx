import React, { useEffect, useState } from 'react';

const ROUTE_EVENT = 'jay-spa-navigate';

/**
 * Normalizes a pathname by stripping trailing slashes while preserving root `/`.
 *
 * @param {string} pathname - Raw location pathname string.
 * @returns {string} Normalized pathname string.
 */
export function normalizePathname(pathname) {
  if (!pathname) return '/';
  const cleaned = pathname.replace(/\/+$/, '');
  return cleaned || '/';
}

/**
 * Scrolls smoothly to an element matching a hash fragment, if present.
 *
 * @param {string} hash - URL hash fragment (with or without leading `#`).
 * @returns {boolean} True when a matching DOM element was found and scrolled to.
 */
function scrollToHash(hash) {
  if (!hash) return false;
  const targetId = hash.replace(/^#/, '');
  if (!targetId) return false;
  const element = document.getElementById(targetId);
  if (!element) return false;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return true;
}

/**
 * Performs client-side SPA navigation using `history.pushState` without a browser reload,
 * handling both query parameters and `#hash` anchor scrolling.
 *
 * @param {string} to - Target internal path, optionally including query string or hash.
 * @param {Object} [options] - Optional navigation settings.
 * @param {boolean} [options.replace=false] - Replace the current history entry instead of pushing.
 * @returns {void}
 */
export function navigate(to, options = {}) {
  const { replace = false } = options;
  if (!to || typeof window === 'undefined') return;

  // Handle pure hash links on the current route without altering pathname
  if (to.startsWith('#')) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${to}`);
    scrollToHash(to);
    window.dispatchEvent(new Event(ROUTE_EVENT));
    return;
  }

  const targetUrl = new URL(to, window.location.origin);
  const currentFull = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  const nextFull = `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`;

  if (currentFull !== nextFull) {
    if (replace) {
      window.history.replaceState(null, '', nextFull);
    } else {
      window.history.pushState(null, '', nextFull);
    }
  }

  window.dispatchEvent(new Event(ROUTE_EVENT));

  if (targetUrl.hash) {
    // Defer hash scroll one frame so newly mounted route sections exist in the DOM
    window.requestAnimationFrame(() => {
      scrollToHash(targetUrl.hash);
    });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Reads the current browser location snapshot (`pathname`, `search`, `hash`).
 *
 * @returns {{ pathname: string, search: string, hash: string }} Current normalized location state.
 */
function readLocation() {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '', hash: '' };
  }
  return {
    pathname: normalizePathname(window.location.pathname),
    search: window.location.search || '',
    hash: window.location.hash || '',
  };
}

/**
 * Subscribes a React component to client-side route changes (`popstate` and SPA `navigate`).
 *
 * @returns {{ pathname: string, search: string, hash: string }} Reactive location snapshot.
 */
export function useLocationState() {
  const [locationState, setLocationState] = useState(readLocation);

  useEffect(() => {
    const sync = () => setLocationState(readLocation());
    window.addEventListener('popstate', sync);
    window.addEventListener(ROUTE_EVENT, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(ROUTE_EVENT, sync);
    };
  }, []);

  return locationState;
}

/**
 * Custom hook returning the active normalized pathname (e.g. `/`, `/work`, `/contact`).
 *
 * @returns {string} Active normalized route pathname.
 */
export function usePathname() {
  const { pathname } = useLocationState();
  return pathname;
}

/**
 * Custom hook returning parsed URL search parameters for the active route.
 *
 * @returns {URLSearchParams} Active query parameters instance.
 */
export function useSearchParams() {
  const { search } = useLocationState();
  return new URLSearchParams(search);
}

/**
 * Client-side anchor wrapper that intercepts internal navigation clicks to prevent
 * full-page reloads while preserving standard browser behavior for external or modified clicks.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.to - Destination URL or path.
 * @param {string} [props.target] - Optional link target (e.g., `'_blank'` for external tabs).
 * @param {Function} [props.onClick] - Optional click handler invoked before routing.
 * @param {React.ReactNode} props.children - Link content.
 * @returns {React.ReactElement} Rendered anchor element.
 */
export function Link({ to, onClick, children, target, ...rest }) {
  /**
   * Intercepts unmodified primary clicks on internal routes and delegates to SPA `navigate`.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} event - Browser click event.
   * @returns {void}
   */
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (event.defaultPrevented) return;
    if (target === '_blank') return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }

    const isExternal = /^(https?:|mailto:|tel:)/i.test(to);
    if (isExternal) return;

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} target={target} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
