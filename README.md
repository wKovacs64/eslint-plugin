# eslint-plugin-wkovacs64

_My personal ESLint plugin._

[![npm Version][npm-image]][npm-url] [![Build Status][ci-image]][ci-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

## Install

```
npm install --save-dev eslint-plugin-wkovacs64
```

> Be sure to install the appropriately versioned `eslint` peer dependency as
> well.

## Usage

Several ESLint configs come bundled with this plugin. To use them, simply extend
the relevant config(s) in your project's ESLint settings.

#### Core Configs

First, choose a single "core" config. It must come before the other
configurations (described below) in your `extends` array.

| Project Type    | Extends                    |
| --------------- | -------------------------- |
| Base (no React) | `'plugin:wkovacs64/base'`  |
| React           | `'plugin:wkovacs64/react'` |

#### Feature Configs

Next, you may augment the core configuration by applying any combination of
"feature" configs.

| Feature         | Extends                              |
| --------------- | ------------------------------------ |
| Jest            | `'plugin:wkovacs64/jest'`            |
| jest-dom        | `'plugin:wkovacs64/jest-dom'`        |
| Testing Library | `'plugin:wkovacs64/testing-library'` |
| TypeScript      | `'plugin:wkovacs64/typescript'`      |

#### Prettier Configs

Finally, you may apply the [Prettier][eslint-config-prettier] config. This must
be **last** in your `extends` array.

| Extends      |
| ------------ |
| `'prettier'` |

## Examples

Base "vanilla JS" project with Jest and Prettier:

```js
module.exports = {
  extends: ['plugin:wkovacs64/base', 'plugin:wkovacs64/jest', 'prettier'],
};
```

React project with Jest, jest-dom, Testing Library, and Prettier:

```js
module.exports = {
  extends: [
    'plugin:wkovacs64/react',
    'plugin:wkovacs64/jest',
    'plugin:wkovacs64/jest-dom',
    'plugin:wkovacs64/testing-library',
    'prettier',
  ],
};
```

Base project with Jest, TypeScript, and Prettier:

```js
module.exports = {
  extends: [
    'plugin:wkovacs64/base',
    'plugin:wkovacs64/jest',
    'plugin:wkovacs64/typescript',
    'prettier',
  ],
};
```

React project with Jest, jest-dom, Testing Library, TypeScript, and Prettier:

```js
module.exports = {
  extends: [
    'plugin:wkovacs64/react',
    'plugin:wkovacs64/jest',
    'plugin:wkovacs64/jest-dom',
    'plugin:wkovacs64/testing-library',
    'plugin:wkovacs64/typescript',
    'prettier',
  ],
};
```

## Inspiration

The dependency management overhead of separate shareable ESLint configs for each
scenario finally got to me. At the time of this writing, I no longer care if I
get peerDependency warnings about TypeScript in non-TypeScript projects (for
example) anymore if it means managing a single dependency (this package). The
implementation details of this project were heavily inspired by
[`@shopify/eslint-plugin`][@shopify/eslint-plugin].

## Warning

The resolution of the "bundled" plugins may only be working as a happy accident
due to Yarn (flatter `node_modules`) and possibly ESLint hoisting (unreliable).
But until ESLint provides an official way to include plugins as dependencies of
shared configs, this will have to do. For reference:

- [eslint/eslint#3458](https://github.com/eslint/eslint/issues/3458)
- [eslint/rfcs#5](https://github.com/eslint/rfcs/pull/5)
- [eslint/rfcs#14](https://github.com/eslint/rfcs/pull/14)

## License

This module is distributed under the [MIT License][license].

[npm-image]:
  https://img.shields.io/npm/v/eslint-plugin-wkovacs64.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/eslint-plugin-wkovacs64
[ci-image]:
  https://img.shields.io/circleci/project/github/wKovacs64/eslint-plugin-wkovacs64/master.svg?style=flat-square
[ci-url]: https://circleci.com/gh/wKovacs64/eslint-plugin-wkovacs64
[semantic-release-image]:
  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[eslint-config-prettier]:
  https://github.com/prettier/eslint-config-prettier#readme
[license]:
  https://github.com/wKovacs64/eslint-plugin-wkovacs64/tree/master/LICENSE.txt
[@shopify/eslint-plugin]:
  https://github.com/Shopify/web-foundation/tree/main/packages/eslint-plugin#readme
