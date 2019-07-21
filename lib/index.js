module.exports = {
  configs: {
    // Core configs - when extending, one of these should go first
    base: require('./config/base'),
    react: require('./config/react'),

    // Feature configs - when extending, these go after the core config
    typescript: require('./config/typescript'),
    jest: require('./config/jest'),

    // Prettier config - when extending, this must go last
    // prettier: require('./config/prettier'),
  },
};
