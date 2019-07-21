const merge = require('merge');

module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
      },
    },
  },

  overrides: [
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      rules: merge(
        require('./rules/typescript'),
        require('./rules/typescript-react'),
      ),
    },
  ],
};
