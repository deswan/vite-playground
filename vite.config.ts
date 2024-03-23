import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { codecovVitePlugin } from "@codecov/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), codecovVitePlugin({
    enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
    bundleName: "vite-playground",
    uploadToken: process.env.CODECOV_TOKEN,
  }),],
  test: {
    coverage: {
      reporter: ['text', 'json'],
    },
  },
})
