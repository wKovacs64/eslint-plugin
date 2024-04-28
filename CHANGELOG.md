# Change Log

## 16.2.0

### Minor Changes

- [`88e9964`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/88e9964a41546bf4a276416224aae77c5128b3f4) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@typescript-eslint/*` to v7.7.1

- [#139](https://github.com/wKovacs64/eslint-plugin-wkovacs64/pull/139) [`2c555a6`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/2c555a6aa96ce8bdca0968e6651a5e53e2d42800) Thanks [@renovate](https://github.com/apps/renovate)! - update eslint-plugin-jest to v28

- [`c76315a`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/c76315a4b09ccba593f599a496c3774bd12b322c) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-react` to v7.34.1

- [`ce57d00`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/ce57d00662fb52f2a5e363017d8957dd36575bfa) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-jest` to v28.3.0

- [`64e3de2`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/64e3de2aa679fad822a2f37a3f2210943e2413ef) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-jest-dom` to v5.4.0

### Patch Changes

- [`463974f`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/463974ff33f4ef5d67e1a3b16b76cc67986186ca) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-react-hooks` to v4.6.2

- [`ef7e39a`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/ef7e39a5783d3b19646d83ea1d2e5e1c15be7dcc) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@rushstack/eslint-patch` to v1.10.2

- [`44d828a`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/44d828a573cefe6967c87003c4061076b2e8a698) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/eslint-parser` to v7.24.1

- [`7f353d9`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/7f353d971e238950de762d9956e2a7771609acff) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-testing-library` to v6.2.2

- [`7d86cb9`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/7d86cb97031ae299bae9efda6b2b9e17e5d26353) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/plugin-syntax-jsx` to v7.24.1

- [`0f3c395`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/0f3c3956f4cacaadc1bb22ef5128f6d1fbdffead) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/core` to v7.24.4

## 16.1.0

### Minor Changes

- [`e815fba`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/e815fba953df7b2e4fd563661dfd9db5f68a771b) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update eslint-plugin-jest to v27.9.0

### Patch Changes

- [`a66aa84`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/a66aa8477b1bb43034f5a9ac7901a804f854b5e2) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update @typescript-eslint/\* to v7.0.2

- [`49b29bc`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/49b29bc2dfa530a136505dba0a47537a633d053f) Thanks [@wKovacs64](https://github.com/wKovacs64)! - disable import/no-extraneous-dependencies for more config files

- [`ffbb8b0`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/ffbb8b0a4d6caeb77dd050edb6c2eec721d62287) Thanks [@wKovacs64](https://github.com/wKovacs64)! - add `eslint-import-resolver-node` as a dependency

  Not sure what changed but apparently this is required now. `¯\_(ツ)_/¯`

- [`cf45f7b`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/cf45f7b7176f01b1cf8b8ae2fda1518499f1bc35) Thanks [@wKovacs64](https://github.com/wKovacs64)! - disable `react/react-in-jsx-scope` rule

  It's hardly ever true anymore.

- [`47cf1c6`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/47cf1c6ecdf1e11f80cb9154ad59e92ee41f1c12) Thanks [@wKovacs64](https://github.com/wKovacs64)! - disable `@typescript-eslint/require-await` rule

  I like declaring Remix functions (e.g., `loader` and `action`) as async even if a specific one may not need it, for consistency.

- [`08e0388`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/08e03881fd3331ac818a17430ce87a23623b5637) Thanks [@wKovacs64](https://github.com/wKovacs64)! - disable import/no-extraneous-dependencies for `mocks` directories

## 16.0.0

### Major Changes

- [`6dcd349`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/6dcd3497ace5c4150c579118e78a354122dde286) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update @typescript-eslint/\* to v7

  This is technically a breaking change as `@typescript-eslint/*` v7 now requires Node `^18.18.0 || >=20.0.0`, ESLint `^8.56.0`, and TypeScript `>=4.7.4`.

### Minor Changes

- [`a697a96`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/a697a96f4cc0474f67b737c2720c9fadcc83a7d8) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update eslint-plugin-jest to v27.8.0

- [`f1c8870`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/f1c887047a99c3b586bab15a8efe9dc54e1eaf0e) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update eslint-config-prettier to v9.1.0

- [`f7b5e47`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/f7b5e47c4e03631d3208924a1a7392675ae40c5e) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update eslint-plugin-import to v2.29.1

- [`6f94727`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/6f94727a0f1e472f6a9d1a6101e946172e04b0f1) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update eslint-plugin-jsx-a11y to v6.8.0

- [`b5bb579`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/b5bb5792b724eef6752a4c9f91192351735de027) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update eslint-plugin-testing-library to v6.2.0

### Patch Changes

- [`942a0b1`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/942a0b16624a4b81c562b4218b8937952c5d956a) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update @babel/core to v7.23.9

- [`d69b2c6`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/d69b2c6185673cbb5cfd71431567711d94fa41e7) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update eslint-import-resolver-typescript to v3.6.1

- [`4fdbcf1`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/4fdbcf193a3e2233745c1b27ae0af61e62446246) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update @babel/eslint-parser to v7.23.10

- [`085f6e4`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/085f6e418caec82c2febb575a0873df34f169953) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update @rushstack/eslint-patch to v1.7.2

- [`e459b0d`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/e459b0df6157e046fa9c19ad0e53eafd1d8b5b18) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update @babel/plugin-syntax-jsx to v7.23.3

## 15.1.0

### Minor Changes

- [#131](https://github.com/wKovacs64/eslint-plugin-wkovacs64/pull/131) [`88815be`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/88815bef00cfa674dae9f5fbf32f3ab21446e47f) Thanks [@renovate](https://github.com/apps/renovate)! - update `eslint-plugin-testing-library` to v6

- [#129](https://github.com/wKovacs64/eslint-plugin-wkovacs64/pull/129) [`06e5018`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/06e5018e240050bc5d24ac02306d5a200897efe7) Thanks [@renovate](https://github.com/apps/renovate)! - update `eslint-config-prettier to v9`

- [`d2c7911`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/d2c7911d61ea022615bebe5fd3b10dd80724294e) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-import` to v2.28.1

- [`1d42891`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/1d428912dcde870b1f677ad3d766108ff2cc553c) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@typescript-eslint/*` to v6.6.0

- [`4bda52f`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/4bda52f151ddb8d704706ad7664f4cb4b875bcf1) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-import-resolver-typescript` to v3.6.0

- [`def70ee`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/def70ee339ceeb240eb351a39aa7ebd557ed14eb) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-react` to v7.33.2

- [`7257931`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/7257931d71df4e54e9fc585dab036dfea7bacafb) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-jest-dom` to v5.1.0

### Patch Changes

- [`5e77907`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/5e7790763538b8dbb3821631ded02fbe1b58063b) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/eslint-parser` to v7.22.15

- [`c5ad0fe`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/c5ad0feb292e6d7c86605b1ab6f5071b7b6596fa) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/core` to v7.22.17

- [`8d65e61`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/8d65e6172c8f6cf9484c927ad13a2144e18ef091) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-testing-library` to v6.0.1

- [`be7cf2f`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/be7cf2f4a91ead11589d022a147fc39efdae9995) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@rushstack/eslint-patch` to v1.3.3

## 15.0.1

### Patch Changes

- [#127](https://github.com/wKovacs64/eslint-plugin-wkovacs64/pull/127) [`d4f34e2`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/d4f34e29d82ffd5fe49209fa19a9efd9af8aaeef) Thanks [@wKovacs64](https://github.com/wKovacs64)! - disable `@typescript-eslint/no-non-null-assertion` rule

## 15.0.0

### Major Changes

- [#124](https://github.com/wKovacs64/eslint-plugin-wkovacs64/pull/124) [`138e22a`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/138e22aa5200c917ec172fdb5138bf2db319b30f) Thanks [@renovate](https://github.com/apps/renovate)! - update `@typescript-eslint/*` to v6

  The `typescript` config now extends from the new typescript-eslint v6 `strict-type-checked` and `stylistic-type-checked` configs. This enables some rules that were not previously enforced, disables some rules that were previously too strict, and may enforce some new stylistic preferences.

### Patch Changes

- [`37ee848`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/37ee8488cecb1cd7f373b11b9bed441ca96032ee) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/*` to v7.22.9

- [`53e08c3`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/53e08c30e384f98c3db3734ca406e6c810b4b0b7) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-jest` to v27.2.3

- [`e7498c4`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/e7498c4e98395bd4a803c0fe6d4b9ed1971c006d) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@rushstack/eslint-patch` to v1.3.2

## 14.3.1

### Patch Changes

- [`0d4f281`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/0d4f2819be32a73a48c6a6d254ccd2d4743b9f91) Thanks [@wKovacs64](https://github.com/wKovacs64)! - disable import/no-extraneous-dependencies for playwright

## 14.3.0

### Minor Changes

- [`cddd5df`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/cddd5df53b173bb4c4bd8ef8faea4ab8d0b2eea2) Thanks [@renovate[bot]](https://github.com/renovate%5Bbot%5D)! - update `eslint-plugin-jest-dom` to v5.0.1

- [`f56bdb6`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/f56bdb636a39ae631895ff506b5035b86264a6bb) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-testing-library` to v5.11.0

- [`5806bbc`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/5806bbc2d425fb3c8e05969875e67e51549ed6f7) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@rushstack/eslint-patch` to v1.3.1

### Patch Changes

- [`abf27a7`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/abf27a71666ea22b5c8f0f68fcacb4006fa48f60) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/*` to v7.22.5

- [`d1d6dfd`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/d1d6dfdb090f1be42e700e754949f7639326349d) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@typescript-eslint/*` to v5.59.9

## 14.2.0

### Minor Changes

- [`6503e82`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/6503e82d767a4a349333087c21743c02eccff2cc) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-jsx-a11y` to v6.7.1

- [`37fb388`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/37fb388e43d986914c4de37cf157dda379870403) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-testing-library` to v5.10.3

- [`c79ef4f`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/c79ef4ff56a0a01eee959e71eaa6dc64cccdb5c9) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-import` to v2.27.5

- [`3cec54b`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/3cec54bcadf0d038c0ec9ab4d5b056b6e1ef34ad) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-config-prettier` to v8.8.0

- [`e2225f6`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/e2225f664b8c16bf463fcea1f2aa67559c471200) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-jest` to v27.2.1

- [`c2c4f50`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/c2c4f5029f3fd65544b3b40fec1c94f7b18b3618) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-plugin-react` to v7.32.2

- [`9a89d38`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/9a89d382c823ba2b29046b18ed826fc1433dabec) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@typescript-eslint/*` to v5.59.2

### Patch Changes

- [`8d1d8af`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/8d1d8afc6da0daef9ef36cb8b4900712e211d2bb) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/eslint-parser` to v7.21.8

- [`867d973`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/867d9734ce832d91ae7338c3f1032ca13e8196f0) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/core` to v7.21.8

- [`c839bd8`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/c839bd82829ecc509ee310c60233295c0e482292) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `eslint-import-resolver-typescript` to v3.5.5

- [`155a9e5`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/155a9e519d930791fd8e8baa491f32983a747c91) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/plugin-syntax-jsx` to v7.21.4

## 14.1.0

### Minor Changes

- [`aaa5b57`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/aaa5b572bfb5200bc3ff56767d6939bd55d3342d) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@typescript-eslint/*` to v5.46.0

### Patch Changes

- [`b33bdc7`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/b33bdc7a88ce4f9c16c723faff54a7e36243cbf3) Thanks [@wKovacs64](https://github.com/wKovacs64)! - `react/require-default-props`: check arguments instead of `defaultProps` for function components

- [`064577c`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/064577c7b3a7681d05a9056101d7fbbef937a6af) Thanks [@wKovacs64](https://github.com/wKovacs64)! - allow floating promises within IIFEs

## 14.0.0

### Major Changes

- [#110](https://github.com/wKovacs64/eslint-plugin-wkovacs64/pull/110) [`05b7af7`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/05b7af773857182ecb79207146decc7578df7ae1) Thanks [@wKovacs64](https://github.com/wKovacs64)! - enable `@typescript-eslint/recommended-requiring-type-checking` rules

  The TypeScript config now includes rules that require type-checking. For this to work, you must set the `parserOptions.project` property in your ESLint config. You may also need to take additional steps if combined with Cypress or Jest (see the README).

## 13.19.0

### Minor Changes

- [`fc72b71`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/fc72b711ba57bb97ad553a48b91a6bcdefd4a1bc) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@typescript-eslint/*` to v5.45.0

- [#111](https://github.com/wKovacs64/eslint-plugin-wkovacs64/pull/111) [`1d0dcd2`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/1d0dcd230893f0d22a90a6e57a40039604b4202a) Thanks [@wKovacs64](https://github.com/wKovacs64)! - allow `void` statements

### Patch Changes

- [`0d0d6c8`](https://github.com/wKovacs64/eslint-plugin-wkovacs64/commit/0d0d6c8625f4dbd39890ddfe48ae314b8c9555ba) Thanks [@wKovacs64](https://github.com/wKovacs64)! - update `@babel/core` to v7.20.5
