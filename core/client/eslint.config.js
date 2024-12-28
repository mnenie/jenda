import jendaEslintConfig from '@jenda/eslint-config'
import vitest from '@vitest/eslint-plugin'
import storybook from 'eslint-plugin-storybook'

export default jendaEslintConfig(
  {
    vue: true,
    typescript: true,
    formatters: {
      css: true,
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'warn',
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
          },
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: { max: 10 },
          multiline: { max: 1 },
        },
      ],
    },
  },
  {
    files: ['src/pages/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            ['external', 'internal'],
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'vue',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['type'],
        },
      ],
      'perfectionist/sort-imports': 'off',
    },
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
