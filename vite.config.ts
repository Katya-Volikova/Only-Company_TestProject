import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
    include: '**/*.svg',
  }),],
  resolve: {
    alias: {
      '@assets': path.resolve(import.meta.dirname, 'src', 'assets'),
    }
  }
})
