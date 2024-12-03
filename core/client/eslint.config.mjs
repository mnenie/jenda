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
      },
    },
  },
  ...storybook.configs['flat/recommended'],
)
