module.exports = {
  plugins: ['testing-library'],

  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

      rules: require('./rules/testing-library'),
    },
  ],
};
