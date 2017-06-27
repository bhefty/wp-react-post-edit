const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

module.exports = require('./webpack.base.babel')({
  // Skipp hot-loading in production
  entry: [
    path.join(process.cwd(), 'app/app.js')
  ],

  // Utilize long-term caching by adding content hashes to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      miniChunks: 2,
      async: true
    }),

    // Minify and optimize index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeReduantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      excludes: ['.htaccess'],
      caches: {
        main: [':rest:'],

        // All chunks marked as `additional`, loaded after main section
        // and do not prevent SW to install. Change to `optional` if
        // you do not want them to be preloaded at all (cached on first load)
        additional: ['*.chunk.js']
      },
      safeToUseOptionalCaches: true,
      AppCache: false
    })
  ],

  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
  }
})
