const merge = require('merge');

module.exports = {
  extends: 'airbnb',

  env: {
    browser: true,
  },

  parser: 'babel-eslint',

  plugins: ['import', 'jsx-a11y', 'react-hooks', 'react'],

  rules: merge(
    require('./rules/eslint'),
    require('./rules/import'),
    require('./rules/jsx-a11y'),
    require('./rules/react-hooks'),
    require('./rules/react'),
  ),
};
