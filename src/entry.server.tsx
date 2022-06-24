import { renderToStringAsync, generateHydrationScript } from 'solid-js/web';
import devalue from 'devalue';
import { createApp } from './app';
import { extractCss } from 'solid-styled-components';

export async function render(url: string) {
  const renderPromise = renderToStringAsync(() => createApp({ url }));
  const css = extractCss();

  return {
    appHtml: await renderPromise,
    css,
    hydration: `<script>window.hydration = ${devalue({ url })}</script>`,
    hydrationScript: generateHydrationScript(),
  };
}
