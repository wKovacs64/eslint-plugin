// Personal preferences that differ from the @typescript-eslint recommended configs:
// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/src/configs
// https://typescript-eslint.io/rules/#supported-rules

module.exports = {
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'typeLike',
      format: ['PascalCase'],
      custom: { regex: '^I[A-Z]', match: false },
    },
  ],
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: true,
    },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreIIFE: true,
    },
  ],
  '@typescript-eslint/no-import-type-side-effects': 'error',
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',
  'no-redeclare': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: true,
      variables: true,
    },
  ],
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowBoolean: true,
      allowNullish: true,
    },
  ],
  '@typescript-eslint/require-await': 'off',
  '@typescript-eslint/unified-signatures': 'warn',
};
