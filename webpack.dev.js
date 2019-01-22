const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.s?css$/,
      // To use several loaders
      use: [
        {loader: "style-loader", options: {sourceMap: true}},
        {loader: "css-loader", options: {sourceMap: true, exportOnlyLocals: true}},
        {loader: "sass-loader", options: {sourceMap: true, exportOnlyLocals: true}}
      ]
    }]
  }
});