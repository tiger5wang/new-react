const { override, addDecoratorsLegacy, fixBabelImports, addLessLoader  } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const Theme = require('./Theme');
// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   return config;
// }

module.exports = override(
    addDecoratorsLegacy(),  // 支持装饰器模式
    // 按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,  // 'css'  less/css 切换
    }),
    // less 配置
    addLessLoader({
        javascriptEnabled: true,  // 这一项是必须的
        modifyVars: Theme,  // 这一项是可选的，用于更改主题
    }),
    // new AntdDayjsWebpackPlugin(),  // 用于优化 antd 项目的打包大小
);