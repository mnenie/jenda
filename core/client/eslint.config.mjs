import jendaEslintConfig from '@jenda/eslint-config'
import vitest from '@vitest/eslint-plugin'
import storybook from 'eslint-plugin-storybook'

export default jendaEslintConfig(
  {
    vue: true,
    typescript: true,
  },
  {
    files: ['__tests__/*'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/expect-expect': 'off',
      'vitest/valid-expect': 'error',
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
        definePage: 'readonly',
      },
    },
  },
  {
    files: ['src/pages/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.stories.*'],
    plugins: {
      storybook,
    },
    rules: {
      ...storybook.configs['flat/recommended'].rules,
    },
  },
  {
    settings: {
      'import/core-modules': ['vue-router/auto-routes'],
    },
  },
)
