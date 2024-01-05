import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vitest/config'
export default defineConfig({
  plugins: [
    EnvironmentPlugin([
      'REACT_APP_TEXT',
      'VITE_API_URL',
      'VITE_WEBSOCKET_URL',
    ])
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['src/@types', 'node_modules'],
  },
})
