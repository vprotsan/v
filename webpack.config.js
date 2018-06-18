const path              = require('path');
const webpack           = require('webpack');
const htmlPlugin        = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const dashboardPlugin   = require('webpack-dashboard/plugin');
const autoprefixer      = require('autoprefixer');
const postCSSConfig     = require('./postcss.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  app: path.join(__dirname, 'src'),
  images:path.join(__dirname,'src/assets/'),
  build: path.join(__dirname, 'dist')
};

const options = {
  host:'localhost',
  port:'3000'
};

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: PATHS.build,
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use:  [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use:  [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  // postcss: function() {
  //   return postCSSConfig;
  // },
  // plugins:(loader) => [
  //     require('postcss-import')({ root: loader.resourcePath }),
  //     require('sass-loader')(),
  //     require('postcss-simple-vars')(),
  //     require('postcss-cssnext')(),
  //     require('autoprefixer')(),
  //     require('cssnano')()
  // ],
  resolve: { extensions: [ ".js", ".json" ] },
};
