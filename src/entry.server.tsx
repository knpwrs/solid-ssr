import { renderToStringAsync, generateHydrationScript } from 'solid-js/web';
import devalue from 'devalue';
import { createApp } from './app';
import { extractCss } from 'solid-styled-components';

export async function render(url: string) {
  const app = createApp({ url });
  const renderPromise = renderToStringAsync(() => app);
  const css = extractCss();

  return {
    appHtml: await renderPromise,
    css,
    hydration: `<script>window.hydration = ${devalue({})}</script>`,
    hydrationScript: generateHydrationScript(),
  };
}
