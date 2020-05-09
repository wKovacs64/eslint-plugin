const merge = require('merge');

module.exports = {
  env: {
    'jest/globals': true,
  },

  plugins: ['jest', 'jest-dom'],

  rules: merge(require('./rules/jest'), require('./rules/jest-dom')),
};
