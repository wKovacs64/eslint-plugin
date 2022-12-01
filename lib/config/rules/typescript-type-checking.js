// Overrides for @typescript-eslint/recommended-requiring-type-checking rules:
// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/src/configs
// https://typescript-eslint.io/rules/#supported-rules

module.exports = {
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreIIFE: true,
    },
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowBoolean: true,
      allowNullish: true,
    },
  ],
};
