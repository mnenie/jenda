import antfu from '@antfu/eslint-config'

/** @type {import('@jenda/eslint-config').Eslint} */
export default function jendaEslintConfig({ ...options } = {}, ...configs) {
  return antfu(
    {
      typescript: true,
      ...options,
    },
    {
      name: '@jenda/eslint-config/base',
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
      ignores: [
        '**/types',
        '**/cache',
        '**/dist',
        '**/.temp',
        '**/*.svg',
        '**/node_modules',
        '**/coverage/**',
      ],
    },
    ...configs,
  )
}
