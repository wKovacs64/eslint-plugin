// Overrides for @typescript-eslint/recommended-requiring-type-checking rules:
// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/src/configs
// https://typescript-eslint.io/rules/#supported-rules

module.exports = {
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
      allowBoolean: true,
      allowNullish: true,
    },
  ],
};
