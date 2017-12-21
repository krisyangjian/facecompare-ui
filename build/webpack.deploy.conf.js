'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = config.deploy.env

const webpackConfig = merge(baseWebpackConfig, {
  module: {
      rules: utils.styleLoaders({
          extract: false,
          usePostCSS: true
      })
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new HtmlWebpackPlugin({
        // filename: config.build.index,
        template: 'index.html',
        inject: true
        // minify: {
        //   removeComments: true,
        //   collapseWhitespace: true,
        //   removeAttributeQuotes: true
        //   // more options:
        //   // https://github.com/kangax/html-minifier#options-quick-reference
        // },
        // // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        // chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks (module) {
          // any required modules inside node_modules are extracted to vendor
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
          )
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'app',
        async: 'vendor-async',
        children: true,
        minChunks: 3
      })
  ]
})
module.exports = webpackConfig
