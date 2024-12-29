import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // Disable the @typescript-eslint/no-explicit-any rule
    '@typescript-eslint/no-explicit-any': 'off',

    // You can add other rule configurations as per your needs
    'no-console': 'warn',  // Example: Warn when `console` is used
    'react/prop-types': 'off',  // Example: Disable prop-types rule for React
  },
});
