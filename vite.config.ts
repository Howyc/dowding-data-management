import path from 'path'
import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ command }: ConfigEnv) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      template: 'treemap',
    }),
    viteMockServe({
      mockPath: 'mocks',
      watchFiles: true,
      localEnabled: command === 'serve',
      prodEnabled: false
    })
  ],
  server: {

  }
}))
