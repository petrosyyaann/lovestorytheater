import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import viteSvgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteSvgr()],
  resolve: {
    alias: {
      pages: '/src/pages',
      modules: '/src/modules',
      components: '/src/components',
      ui: '/src/ui',
      assets: '/src/assets',
    },
  },
  base: '/lovestorytheater/',
});
