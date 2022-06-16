import { renderToStringAsync, generateHydrationScript } from 'solid-js/web';
import devalue from 'devalue';
import { createApp } from './app';
import { extractCss } from 'solid-styled-components';

export async function render(url: string) {
  const app = createApp({ url });

  return {
    appHtml: await renderToStringAsync(() => app),
    css: extractCss(),
    hydration: `<script>window.hydration = ${devalue({})}</script>`,
    hydrationScript: generateHydrationScript(),
  };
}
