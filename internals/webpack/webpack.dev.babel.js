// Development webpack config

const path = require('path')
const webpack = require('webpack')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const plugins = [
  new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
  new webpack.NoEmitOnErrorsPlugin(),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/, // exclude node_modules
    failOnError: false // show a warning when there is a circular dependency
  })
]

module.exports = require('./webpack.base.babel')({
  // Add hot reloading
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  // Add development plugins
  plugins: plugins, // eslint-disable-line no-use-before-define

  // Tell babel we want to hot-reload
  babelQuery: {
    // require.resolve solves the issue of relative presets when dealing with
    // locally linked packages. This is an issue with babel and webpack.
    // See https://github.com/babel/babel-loader/issues/149 and
    // https://github.com/webpack/webpack/issues/1866
    presets: ['babel-preset-react-hmre'].map(require.resolve)
  },

  // Emit a source map for debugging
  devtool: 'cheap-module-eval-source-map',

  performance: {
    hints: false
  }
})
