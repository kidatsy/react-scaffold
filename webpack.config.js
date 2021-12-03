const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['lodash'],
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      }
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      collections: true,
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      React: 'react',
    }),
    new HtmlWebPackPlugin({
      template: './assets/index.html',
    }),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
