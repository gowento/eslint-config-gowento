module.exports = {
  parser: 'babel-eslint',

  env: {
    // Enable all “ES6” features except for modules (accept ES2015 globals + set ECMAScript parser version to 6)
    es6: true,
    // Accept Node.js global variables and set Node.js scoping.
    node: true,
  },

  extends: [
    // Airbnb ESLint rules, including ECMAScript 6+ and React.
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1
    'airbnb',
    // Enforce ESLint good practices for AVA.
    // https://github.com/avajs/eslint-plugin-ava#recommended-config
    'plugin:ava/recommended',
    // Recommended Lodash-specific linting rules for ESLint.
    // https://github.com/wix/eslint-plugin-lodash#recommended-configuration
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
