import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: '127.0.0.1',     // vermijdt localhost-DNS issues
    strictPort: true,      // gebruik steeds dezelfde poort
    watch: {
      usePolling: true,    // fallback als Windows watchers stuk zijn
      interval: 100        // iets sneller dan standaard
    },
    hmr: {
      host: '127.0.0.1'    // dwing HMR via dezelfde host
    }
  }
});
