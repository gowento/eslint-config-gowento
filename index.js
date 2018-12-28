const prettierConfig = require('./prettier.config');

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
    // Turn off ESLint's formatting rules, turn on Prettier recommended rules
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
    // Enforce best practices for JavaScript promises
    // https://github.com/xjamundx/eslint-plugin-promise#rules
    'plugin:promise/recommended',
    'prettier/react',
  ],

  settings: {
    react: {
      pragma: 'React',
      version: '16.3',
    },
  },

  plugins: ['ava', 'lodash', 'prettier', 'promise'],

  rules: {
    // Do not require `return` statements to consistently specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // Import the full Lodash module (it is expected that `babel-plugin-lodash` is used)
    // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/import-scope.md
    'lodash/import-scope': ['error', 'full'],

    // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chaining.md
    'lodash/chaining': ['error', 'always', 3],

    // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-method.md
    'lodash/prefer-lodash-method': 'off',

    // Enforce minimum identifier length of 2 characters, except Lodash and AVA
    // https://eslint.org/docs/rules/id-length
    'id-length': [
      'error',
      {
        min: 2,
        properties: 'never',
        exceptions: ['_', 't'],
      },
    ],

    // Disallow Reassignment of Function Parameters, except props of parameter objects
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],

    // Disallow dangling underscores in identifiers, except MongoDB special fields and Agenda props
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_collection', '_id', '__v'],
      },
    ],

    'prettier/prettier': ['error', prettierConfig],
  },
};
