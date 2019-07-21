# @wKovacs64/eslint-plugin

_My personal ESLint plugin._

[![npm Version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

## Install

```
yarn add --dev @wkovacs64/eslint-plugin
```

> Be sure to install the appropriately versioned `peerDependencies` as well.

## Usage

Several ESLint configs come bundled with this plugin. To use them, simply extend
the relevant configuration in your project's ESLint config:

```js
// .eslintrc.js

module.exports = {
  extends: ['@wkovacs64/eslint-plugin'],
};
```

[npm-image]:
  https://img.shields.io/npm/v/@wkovacs64/eslint-plugin.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@wkovacs64/eslint-plugin
[ci-image]:
  https://img.shields.io/circleci/project/github/wKovacs64/eslint-plugin/master.svg?style=flat-square
[ci-url]: https://circleci.com/gh/wKovacs64/eslint-plugin
[semantic-release-image]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
