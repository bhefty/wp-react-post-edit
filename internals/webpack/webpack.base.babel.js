// Common webpack config based on:
// https://github.com/react-boilerplate/react-boilerplate

const path = require('path')
const webpack = require('webpack')

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/'
  }, options.output), // Merge with env dependent settings
  module: {
    loaders: [{
      test: /\.js$/, // Transform all .js files required somehwere with Babel
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: options.babelQuery
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader'
    }, {
      test: /\.(jpg|png|gif)$/,
      loaders: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          query: {
            pngquant: {
              quality: '65-90',
              speed: 4,
              progressive: true,
              optimizationLevel: 7,
              interlaced: false
            },
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            }
          }
        }
      ]
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(mp4|webm)$/,
      loader: 'url-loader',
      query: {
        limit: 10000
      }
    }]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // Make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    // Always expose NODE_ENV to webpack to use `process.env.NODE_ENV`
    // inside your code for any env checks. UglifyJS will auto
    // drop any unreachable code
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin()
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js'
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main'
    ]
  },
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {}
})
