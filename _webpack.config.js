const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const extractCSS = new ExtractTextPlugin('styles.css');

function getPlugins() {
  if (isProduction) {
    return [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
      extractCSS,
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
    ];
  }

  return [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    extractCSS,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ];
}

module.exports = {
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  entry: [
    path.join(__dirname, 'src/_js/index.js'),
    path.join(__dirname, 'src/_css/index.css'),
  ],
  output: {
    path: path.join(__dirname, 'src/assets'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('@dlghq/postcss-dialog')({
                    bundler: webpack,
                    initial: false,
                  }),
                ];
              },
            },
          },
        ]),
        include: [path.join(__dirname, 'src')],
      },
    ],
  },
  plugins: getPlugins(),
};
