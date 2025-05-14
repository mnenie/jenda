import jendaEslintConfig from '@jenda/eslint-config'

export default jendaEslintConfig(
  {
    vue: true,
    typescript: true,
    stylistic: {
      commaDangle: 'never',
    },
  },
).overrideRules({
  'import/first': 'off',
  'import/order': 'off',
  'vue/max-attributes-per-line': [
    'error',
    { singleline: 3 },
  ],
})
