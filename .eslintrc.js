module.exports = {
  extends: [require.resolve('./lib/config/base.js'), 'prettier'],
  rules: {
    'global-require': 'off',
  },
};
