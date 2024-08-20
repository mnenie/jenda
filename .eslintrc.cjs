/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended'
  ],
  rules: {
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['/^router-/', 'keep-alive']
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        } 
      }
    ],
    'vue/multi-word-component-names': 'warn'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
