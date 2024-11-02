import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import vitest from '@vitest/eslint-plugin';
import antfu from 'eslint-plugin-antfu';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', 'node_modules/*', '**/dist-ssr/**', '**/coverage/**']
  },
  {
    plugins: {
      antfu
    }
  },
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  {
    rules: {
      'antfu/top-level-function': 'error',
      'vue/multi-word-component-names': 'warn',
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
      'no-console': 'error',
      'no-alert': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off'
    }
  },
  {
    files: ['src/**/__tests__/*'],
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/valid-expect': 'off',
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  },
  skipFormatting
];
