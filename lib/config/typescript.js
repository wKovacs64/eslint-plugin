module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // needed?
      node: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
      },
      typescript: {},
    },
  },

  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/typescript'),
    },
  ],
};
