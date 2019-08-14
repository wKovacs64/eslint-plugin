module.exports = {
  'no-nested-ternary': 'off',
  'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  'prefer-object-spread': 'off',
  'valid-jsdoc': [
    'error',
    {
      prefer: {
        arg: 'param',
        argument: 'param',
        return: 'returns',
      },
    },
  ],
};
