const merge = require('merge');

module.exports = {
  extends: ['plugin:import/typescript'],

  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],

      files: ['*.ts', '*.tsx'],

      rules: merge(require('./rules/typescript'), require('./rules/typescript-react')),

      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
};
