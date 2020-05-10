module.exports = {
  env: {
    'jest/globals': true,
  },

  plugins: ['jest'],

  rules: require('./rules/jest'),
};
