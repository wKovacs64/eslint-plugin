module.exports = {
  configs: {
    // Core configs - when extending, one of these should go first
    base: require('./config/base'),
    react: require('./config/react'),

    // Feature configs - when extending, these go after the core config
    jest: require('./config/jest'),
    'jest-dom': require('./config/jest-dom'),
    'testing-library': require('./config/testing-library'),
    typescript: require('./config/typescript'),

    // Prettier config - when extending, this must go last
    // prettier: require('./config/prettier'),
  },
};
