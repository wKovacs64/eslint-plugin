module.exports = {
  parser: require.resolve('@babel/eslint-parser'),

  parserOptions: {
    requireConfigFile: false,
  },

  plugins: ['import', 'jsx-a11y', 'react-hooks', 'react'],
};
