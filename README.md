# Jay Kumar Srivastava — Portfolio

A small multi-page portfolio built with Vite, React and plain CSS. It uses direct routes and static content so there is no database, authentication system, or custom API to maintain.

## Run locally

```sh
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```

Open `http://localhost:5173/`. Create a production build with `npm run build`.

## Pages

- `/` — Home
- `/work` — project previews and source links
- `/services` — service details
- `/about` — profile and certifications
- `/journal` — project articles
- `/contact` — lead form and contact links

The shared navigation points to each page directly. Netlify rewrites these paths to the static app entry point.

## Update the content

- Edit project links and descriptions, services, certifications and journal articles in `src/main.jsx`.
- Edit layout, color themes, typography and breakpoints in `src/styles.css`.
- Update page metadata and the Netlify form field skeleton in `index.html`.
- The theme preference is saved in `localStorage`; this stores only the visual preference, not credentials or session data.

## Contact form and security

The contact form uses Netlify Forms with a hidden static form skeleton, a honeypot and browser validation for field types and length. Enable form detection in the Netlify site's Forms settings and configure an email notification after deployment. Netlify processes and stores submissions so Jay can reply; no visitor analytics or counter is installed.

This portfolio has no login, database, or custom API endpoints, so there are no application passwords, auth tokens, SQL queries, or CORS routes to secure. `netlify.toml` sets CSP, HSTS, frame, MIME sniffing, referrer and permissions headers. The Vite production build disables source maps.

## Deploy

`netlify.toml` sets `npm run build`, publishes `dist`, and rewrites page routes to `index.html`.
