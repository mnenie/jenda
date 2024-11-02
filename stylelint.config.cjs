/** @type {import('stylelint').Config} */
module.exports = {
  ignoreFiles: ['dist/**/*.css', 'coverage/**/*.css'],
  extends: 'stylelint-config-standard-scss',
  rules: {
    'no-duplicate-selectors': null,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class']
      }
    ],
    'selector-attribute-quotes': 'always',
    'declaration-no-important': true,
    'font-weight-notation': 'numeric',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': 'always',
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'declaration-no-important': null,
    'scss/load-no-partial-leading-underscore': null
  }
};