const { override, addDecoratorsLegacy } = require('customize-cra');

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   return config;
// }

module.exports = override(
  addDecoratorsLegacy(),  // 支持装饰器模式
);