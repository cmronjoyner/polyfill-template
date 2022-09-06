/// <reference types="vitest" />

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Polyfill',
      // the proper extensions will be added
      fileName: 'polyfill',
    },
    target: 'es6',
    sourcemap: true,
  },
  /**
   * @see https://vitest.dev/config/#configuration
   */
  test: {
    include: ['./tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    watch: false,
    clearMocks: true,
    reporters: 'dot',
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['text-summary', 'html'],
      include: ['src/**/*.{js,ts}'],
      skipFull: true,
      all: true,
      // Threshold
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
});
