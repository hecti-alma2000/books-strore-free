import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      // ESTO EVITA QUE ESBUILD ESCANEE TODO AL INICIO Y SE DETENGA
      noDiscovery: true,
      include: []
    },
    server: {
      fs: {
        strict: false
      }
    }
  }
});