module.exports = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/ban-ts-ignore': 'error',
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/class-name-casing': 'error',
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      // TODO: how annoying would it be to drop this...
      allowExpressions: true,
    },
  ],
  '@typescript-eslint/interface-name-prefix': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/unified-signatures': 'warn',
};
