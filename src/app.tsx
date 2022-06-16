import type { Component } from 'solid-js';
import { Router } from 'solid-app-router';
import { Link, useRoutes, useLocation } from 'solid-app-router';

import { routes } from './routes';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/error">Error</Link>
          </li>

          <li>
            <span>URL:</span>
            <input type="text" readOnly value={location.pathname} />
          </li>
        </ul>
      </nav>

      <main>
        <Route />
      </main>
    </>
  );
};

export function createApp({ url }: { url?: string }) {
  return (
    <Router url={url}>
      <App />
    </Router>
  );
}
