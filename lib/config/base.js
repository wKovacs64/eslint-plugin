const merge = require('merge');

module.exports = {
  extends: [require.resolve('./common'), 'airbnb-base'],

  rules: merge(require('./rules/eslint'), require('./rules/import')),
};
