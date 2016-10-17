var webpack = require('webpack'),
	path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.(js)$/, loader: 'babel', exclude: /node_modules/ },
          {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/assets/[name].[ext]"},
          { 
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract(
                  { 
                    fallbackLoader: 'style-loader', 
                    loader: 'css-loader?sourceMap!sass-loader?outputStyle=compressed'
              })
          },
        ]
      },
      resolve: {
          extensions: ['', '.js', '.scss', '.css', '.svg', '.png'],
          root: './src'
      }
    },
    webpackServer: {
      noInfo: true
    },
    plugins: [
      require('karma-spec-reporter'),
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-sourcemap-loader')
    ],
    reporters: ['spec'],
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: true
  });
};