/* eslint-disable */
const path = require('path');
const merge = require('webpack-merge');
// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const Visualizer = require('webpack-visualizer-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// Configs
const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => {
  const { BE } = env;
  return merge([
    {
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            sourceMap: false,
          }),
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name]_[hash].css',
        }),
        new OptimizeCssAssetsPlugin(),
        // new Visualizer({ filename: './statistics.html' }),

        // new CompressionPlugin({
        //   filename: '[path].gz[query]',
        //   algorithm: 'gzip',
        //   test: /\.(js|css|html|svg)$/,
        //   compressionOptions: { level: 9 },
        //   threshold: 10240,
        //   minRatio: 0.8,
        //   deleteOriginalAssets: false,
        // })
      ],
      resolve: {
        alias: {
          moment: 'moment/min/moment.min.js',
        },
      },
      output: {
        filename: 'assets/js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, '..', `build/${BE}`),
        publicPath: '/',
      },
    },
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};
