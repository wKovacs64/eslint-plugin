// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  parser: require.resolve('@babel/eslint-parser'),

  parserOptions: {
    requireConfigFile: false,
  },

  plugins: ['import', 'jsx-a11y', 'react-hooks', 'react'],
};
