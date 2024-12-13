import antfu from '@antfu/eslint-config'

/** @type {import('@jenda/eslint-config').Eslint} */
export default function jendaEslintConfig({ ...options } = {}, ...configs) {
  return antfu(
    {
      vue: true,
      typescript: true,
      ignores: [
        '**/types',
        '**/cache',
        '**/dist',
        '**/.temp',
        '**/*.svg',
        '**/node_modules',
        '**/coverage/**',
      ],
      ...options,
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
            // ignores: ['/^router-/', 'keep-alive'],
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
      files: ['core/client/src/pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      rules: {
        'no-console': 'error',
        'no-alert': 'error',
        'ts/no-explicit-any': 'off',
        'ts/no-unused-vars': 'warn',
        'ts/no-empty-object-type': 'off',
        'ts/ban-ts-comment': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['core/server/**/*.ts'],
      rules: {
        'ts/explicit-module-boundary-types': 'off',
        'ts/interface-name-prefix': 'off',
        'ts/explicit-function-return-type': 'off',
        'ts/no-namespace': 'off',
      },
    },
    ...configs,
  )
}
