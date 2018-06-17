const path              = require('path');
const webpack           = require('webpack');
const htmlPlugin        = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const dashboardPlugin   = require('webpack-dashboard/plugin');
const autoprefixer      = require('autoprefixer');
const postCSSConfig     = require('./postcss.config');


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
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.[hash].js'
  },
  // devServer: {
  //     historyApiFallback: true,
  //     hot: true,
  //     inline: true,
  //     stats: 'errors-only',
  //     host: options.host,
  //     port: options.port
  //   },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        // loaders: ['style', 'css', 'postcss'],
        loader: 'style-loader!css-loader!postcss-loader',
        include:PATHS.app
      },

      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: '[path][name].[ext]'
        }
      },
    ]
  },
  // postcss: function() {
  //   return [
  //     autoprefixer({
  //       browsers: [
  //         '>1%',
  //         'last 4 versions',
  //         'Firefox ESR',
  //         'not ie < 9',
  //       ]
  //     }),
  //   ];
  // },
  postcss: function() {
    return postCSSConfig;
  },
  plugins:(loader) => [
      require('postcss-import')({ root: loader.resourcePath }),
      require('postcss-cssnext')(),
      require('autoprefixer')(),
      require('cssnano')()
  ],
  output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: '[name].[hash].js',
    },
  resolve: { extensions: [ ".js", ".json" ] },
};
