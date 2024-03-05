/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    'no-unused-vars': 'error',
    'semi': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'vue/multi-word-component-names': 'off',
    'no-useless-escape': 'off',
    'vue/no-reserved-component-names': 'off',
    'prefer-const': 'off',
  },
  settings: {
    'import/resolver': {
      'typescript': {} // This tells ESLint how to resolve TypeScript imports
    }
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
