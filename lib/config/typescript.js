const merge = require('merge');

module.exports = {
  extends: ['plugin:import/typescript'],

  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      files: ['*.ts', '*.tsx'],

      rules: merge(
        require('./rules/typescript'),
        require('./rules/typescript-type-checking'),
        require('./rules/typescript-react'),
      ),

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
