module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb/base',
    'plugin:ava/recommended',
    'plugin:lodash/recommended',
  ],
  plugins: [
    'ava',
    'lodash',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'lodash/prefer-lodash-method': 0,
    'consistent-return': 0,
    'no-console': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'no-param-reassign': [2, {
      props: false,
    }],
    'id-length': [2, {
      min: 2,
      properties: 'never',
      exceptions: ['_', 't'], // Allow lodash and ava
    }],
    'no-underscore-dangle': [2, {
      allow: ['_id', '__v'], // Allow MongoDB special fields
    }],
  },
};
