module.exports = {
  configs: {
    // Core configs - when extending, one of these should go first
    base: require('./lib/config/base'),
    react: require('./lib/config/react'),

    // Augmenting configs - when extending, these go after the core config
    typescript: require('./lib/config/typescript'),
    jest: require('./lib/config/jest'),

    // Prettier config - when extending, this must go last
    // prettier: require('./lib/config/prettier'),
  },
};
