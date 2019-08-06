const merge = require('merge');

module.exports = {
  extends: ['plugin:import/typescript'],

  plugins: ['@typescript-eslint/eslint-plugin'],

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
