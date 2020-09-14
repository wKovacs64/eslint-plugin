// Most of these are personal preferences that differ from the @typescript-eslint recommended config:
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules

module.exports = {
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'typeLike',
      format: ['PascalCase'],
      custom: { regex: '^I[A-Z]', match: false },
    },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-implicit-any-catch': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': ['error'],
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unused-vars': 'error',
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/unified-signatures': 'warn',
};
