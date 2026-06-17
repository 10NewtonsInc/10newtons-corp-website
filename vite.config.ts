/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // MUI's ESM build imports react-transition-group via directory subpaths
      // (e.g. ".../TransitionGroupContext"). The package ships no `exports`
      // map, so raw ESM can't resolve them — point each at its esm/*.js file.
      {
        find: /^react-transition-group\/([A-Za-z]+)$/,
        replacement: 'react-transition-group/esm/$1.js',
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    server: {
      deps: {
        // Inline MUI so Vite transforms its ESM (and applies the alias above)
        // instead of letting Node's loader choke on the directory import.
        inline: [/@mui\//, /react-transition-group/],
      },
    },
  },
})
