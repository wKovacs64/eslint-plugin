const merge = require('merge');

module.exports = {
  extends: 'airbnb-base',

  parser: 'babel-eslint',

  plugins: ['import'],

  rules: merge(require('./rules/eslint'), require('./rules/import')),
};
