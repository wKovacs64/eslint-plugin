const merge = require('merge');

module.exports = {
  extends: ['plugin:import/typescript'],

  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended'],

      files: ['*.ts', '*.tsx'],

      rules: merge(
        require('./rules/typescript'),
        require('./rules/typescript-react'),
      ),
    },
  ],
};
