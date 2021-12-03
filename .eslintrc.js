module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  globals: {
    _: 'readonly',
    React: 'readonly',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
  rules: {
    'max-len':0,
  },
  overrides: [
    {
      files: [
        '*.test.js',
        '__test__.js',
        '*.test.jsx',
        '__test__.jsx',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      }
    },
  ],
};
