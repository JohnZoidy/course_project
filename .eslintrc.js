// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'react/require-default-props': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'i18next/no-literal-string': ['error', { markupOnly: true }]
  },
  globals: {
    __IS_DEV__: true
  }
};
