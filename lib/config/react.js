const merge = require('merge');

module.exports = {
  extends: [require.resolve('./common'), 'airbnb'],

  env: {
    browser: true,
  },

  parserOptions: {
    babelOptions: {
      plugins: ['@babel/plugin-syntax-jsx'],
    },
  },

  rules: merge(
    require('./rules/eslint'),
    require('./rules/import'),
    require('./rules/jsx-a11y'),
    require('./rules/react-hooks'),
    require('./rules/react'),
  ),
};
