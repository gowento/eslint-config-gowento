module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:ava/recommended',
    'plugin:lodash/recommended',
  ],
  plugins: [
    'ava',
    'lodash',
  ],
  rules: {
    'lodash/prefer-lodash-method': 0,
    'lodash/import-scope': 0,
    'lodash/chaining': [2, 'always'],
    'consistent-return': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-newline': 0,
    'no-await-in-loop': 0,
    'function-paren-newline': 0,
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-param-reassign': [2, {
      props: false,
    }],
    'id-length': [2, {
      min: 2,
      properties: 'never',
      exceptions: ['_', 't'], // Allow lodash and ava
    }],
    'no-underscore-dangle': [2, {
      allow: ['_id', '__v', '_collection'], // Allow MongoDB special fields & agenda props
    }],
  },
};
