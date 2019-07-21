module.exports = {
  extends: [require.resolve('./lib/config/base'), 'prettier'],
  rules: {
    'global-require': 'off',
  },
};
