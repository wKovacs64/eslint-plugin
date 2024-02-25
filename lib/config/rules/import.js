module.exports = {
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      mjs: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '.*rc.{js,cjs,mjs}',
        '*.{config,setup}.{ts,js,cjs,mjs}',
        '**/test.{js,jsx}',
        '**/test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
        '**/test/**',
        '**/tests/**',
        '**/spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/cypress/**',
        '**/playwright/**',
        '**/jest.config.{js,cjs,mjs}',
        '**/jest.setup.{js,cjs,mjs}',
        '**/setupTests.{js,cjs,mjs}',
        '**/setupProxy.{js,cjs,mjs}',
      ],
    },
  ],
  'import/prefer-default-export': 'off',
};
