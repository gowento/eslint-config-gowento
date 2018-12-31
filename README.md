# eslint-config-gowento

Standard ESLint config used in Gowento projects.

[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

## Features

- Extends `eslint-config-airbnb` (which provides `eslint-plugin-react`)
- Provides additional rules and recommended settings for language features and standard Gowento tooling through plugins:
  - `eslint-plugin-ava`
  - `eslint-plugin-lodash`
  - `eslint-plugin-prettier`
  - `eslint-plugin-promise`

## Install

```sh
# Using npm
npm install --save-dev eslint eslint-config-gowento
```

```sh
# Using yarn
yarn add eslint eslint-config-gowento --dev
```

## Usage

### Configuration

Configure ESLint to extend the standard Gowento configuration, using the recommended `.eslintrc.js`:

```js
module.exports = {
  extends: 'gowento',
};
```

Configure Prettier to the standard Gowento configuration, using the recommended `prettier.config.js`:

```js
/* eslint import/no-extraneous-dependencies: ["error", { "devDependencies": true }] */
module.exports = require('eslint-config-gowento/prettier.config');
```

## License

MIT © [Gowento](https://www.gowento.com)

[npm-url]: https://npmjs.org/package/eslint-config-gowento
[npm-image]: https://img.shields.io/npm/v/eslint-config-gowento.svg?style=flat-square
[depstat-url]: https://david-dm.org/gowento/eslint-config-gowento
[depstat-image]: https://david-dm.org/gowento/eslint-config-gowento.svg?style=flat-square
[download-badge]: http://img.shields.io/npm/dm/eslint-config-gowento.svg?style=flat-square
