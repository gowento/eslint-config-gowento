# eslint-config-gowento

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> Shared ESLint config used in Gowento projects.

## Features

- Extends `eslint-config-airbnb`
- Includes the following plugins:
    + `eslint-plugin-lodash`
    + `eslint-plugin-react`
    + `eslint-plugin-ava`

## Install

```sh
npm i -D eslint eslint-config-gowento
```

## Usage

### Configuration

Update your `.eslintrc` (works with `package.json` too):

```json
{
    "extends": "gowento"
}
```

## Known Issues

Currently, due to an [issue with ESLint](https://github.com/eslint/eslint/issues/3458), ESLint's peer dependencies should be manually installed/updated as described [here](https://www.npmjs.com/package/eslint-config-airbnb#eslint-config-airbnb-1).

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
