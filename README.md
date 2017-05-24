# eslint-config-gowento

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> Shared ESLint config used in Gowento projects.

## Features

- Runs `babel-eslint`, allowing Gowento projects to use customized Babel configuration
- Extends `eslint-config-airbnb`, which provides `eslint-plugin-react`
- Includes plugins for standard Gowento tooling:
    + `eslint-plugin-lodash`
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

## Maintenance

Dependencies versioned using `"*"` represent peer dependencies of [eslint-config-airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/package.json).

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
