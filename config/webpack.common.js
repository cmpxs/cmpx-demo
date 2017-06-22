var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    //'polyfills': './src/polyfills.ts',
    //'vendor': './src/vendor.ts',
    'index': './src/Index.ts'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader']
      },
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'app'),
      //   loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      // },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['index']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject:true
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html 
      filename: 'tmpl1.html',
      template: 'src/tmpl1.html',
      inject:false
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html 
      filename: 'css1.css',
      template: 'src/css1.css',
      inject:false
    })
  ]
};