import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin({ ssr: true })],
  ssr: {
    noExternal: ['solid-app-router'],
  },
});
