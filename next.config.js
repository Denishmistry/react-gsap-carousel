const webpack = require('webpack')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const withImages = require('next-images')

module.exports = withImages({
  cssLoaderOptions: {
    url: false
  },
  esModule: true,
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        cache: true,
        sourceMap: true,
        parallel: true,
      }),
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
})