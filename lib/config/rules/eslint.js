module.exports = {
  'arrow-body-style': 'off',
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    // {
    //   selector: 'ForOfStatement',
    //   message:
    //     'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    // },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'no-nested-ternary': 'off',
  'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  'no-use-before-define': [
    'error',
    {
      functions: false,
      classes: true,
      variables: true,
    },
  ],
  'no-void': ['error', { allowAsStatement: true }],
  'prefer-arrow-callback': 'off',
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
