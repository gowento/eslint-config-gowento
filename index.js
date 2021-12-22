const prettierConfig = require('./prettier.config');

module.exports = {
  parser: '@babel/eslint-parser',

  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },

  env: {
    // Enable all “ES6” features except for modules (accept ES2015 globals + set ECMAScript parser version to 6)
    es6: true,
    // Accept Node.js global variables and set Node.js scoping.
    node: true,
  },

  extends: [
    // Airbnb ESLint configuration
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1
    'airbnb',
    // Airbnb rules include ECMAScript 6+ and React, and supersede the ESLint preset,
    // so we do not need to extend "eslint:recommended" nor "plugin:react/recommended"

    // Enforce ESLint good practices for AVA.
    // https://github.com/avajs/eslint-plugin-ava#recommended-config
    'plugin:ava/recommended',
    // Recommended Lodash-specific linting rules for ESLint.
    // https://github.com/wix/eslint-plugin-lodash#recommended-configuration
    'plugin:lodash/recommended',
    // Enforce best practices for JavaScript promises
    // https://github.com/xjamundx/eslint-plugin-promise#rules
    'plugin:promise/recommended',

    // Turn off ESLint's formatting rules, turn on Prettier recommended rules including React
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
    'prettier',
  ],

  plugins: ['ava', 'lodash', 'prettier', 'promise', 'react-hooks'],

  rules: {
    // Do not require `return` statements to consistently specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // Enforce minimum identifier length of 2 characters, except Lodash’s `_` and AVA’s `t`
    // https://eslint.org/docs/rules/id-length
    'id-length': [
      'error',
      {
        min: 2,
        properties: 'never',
        exceptions: ['_', 't'],
      },
    ],

    // Disallow dangling underscores in identifiers, except MongoDB’s `_id` and Mongoose’s `__v`
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '__v'],
      },
    ],

    // Disallow reassignment of all function parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],

    'no-promise-executor-return': 'off',

    'prefer-regex-literals': 'off',

    'promise/no-return-wrap': 'off',

    camelcase: 'off',

    'default-param-last': 'off',

    // Allows await in "for in" loops (https://github.com/airbnb/javascript/issues/851)
    'no-await-in-loop': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Enforce usage of chaining over 3 nested Lodash functions
    // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chaining.md
    'lodash/chaining': ['error', 'always', 3],

    // Import the full Lodash module (it is expected that `babel-plugin-lodash` is used)
    // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/import-scope.md
    'lodash/import-scope': ['error', 'full'],

    // Do not enforce usage of Lodash implementation over native functions like `forEach` and `map`
    // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-method.md
    'lodash/prefer-lodash-method': 'off',

    // Enforce Gowento Prettier config described in `./prettier.config.js`
    // https://github.com/prettier/eslint-plugin-prettier#installation
    'prettier/prettier': ['error', prettierConfig],

    // Enforce standard form for React fragments (as opposed to shorthand form `<>` / `</>`)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'element'],

    // Enforce that standard React static properties in ES2015 class components should be declared as property assignments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'property assignment'],

    // Enforce rules of React Hooks
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
