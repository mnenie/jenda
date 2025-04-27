import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(configEnv => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      setupFiles: [
        './src/shared/libs/vitest-utils/cookiesI18n-mock.ts',
        './src/shared/libs/vitest-utils/i18n-setup.ts',
      ],
      root: fileURLToPath(new URL('./', import.meta.url)),
      css: {
        modules: {
          classNameStrategy: 'non-scoped',
        },
      },
    },
  }),
))
