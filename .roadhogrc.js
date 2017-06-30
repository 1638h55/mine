const path = require('path');

const values = require('postcss-modules-values');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
   path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
];

export default {
  module: {
    loaders: [{
      test: /\.jsx?$'/,
      include: /src/,
      exclude: /node_modules/,
      loader: babel,
      query: {
         presets: ['es2015', 'stage-0', 'react']
       }
    }, {
      test: /\.less$/,
      exclude: path.resolve(__dirname, 'src/styles'),
      loader: "style!css?modules&localIdentName=[name]__[local]!less?sourceMap=true!postcss-loader"
    }, {
      test: /\.less$/,
      include: path.resolve(__dirname, 'src/styles'),
      loader: "style!css!less?sourceMap=true"
    }]
  },
  postcss:[
    values
  ]
  svgSpriteLoaderDirs: svgSpriteDirs,
  //...
}
