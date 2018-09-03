# eslint-config-gowento

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> Shared ESLint config used in Gowento projects.

## Features

- Extends `eslint-config-airbnb` (which provides `eslint-plugin-react`)
- Includes plugins and recommended settings for standard Gowento tooling:
  - `eslint-plugin-lodash`
  - `eslint-plugin-ava`
  - `eslint-plugin-prettier`

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
[travis-url]: https://travis-ci.org/gowento/eslint-config-gowento
[travis-image]: https://img.shields.io/travis/gowento/eslint-config-gowento.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/gowento/eslint-config-gowento
[coveralls-image]: https://img.shields.io/coveralls/gowento/eslint-config-gowento.svg?style=flat-square
[depstat-url]: https://david-dm.org/gowento/eslint-config-gowento
[depstat-image]: https://david-dm.org/gowento/eslint-config-gowento.svg?style=flat-square
[download-badge]: http://img.shields.io/npm/dm/eslint-config-gowento.svg?style=flat-square
