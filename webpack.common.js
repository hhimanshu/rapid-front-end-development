const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  plugins: [
    new RemovePlugin({
      before: {
        // expects what your output folder is `dist`.
        test: [
          {
            folder: './dist',
            method: absoluteItemPath => {
              return !absoluteItemPath.endsWith('mockServiceWorker.js');
            },
          },
        ],
      },
      exclude: ['./dist/mockServiceWorker.js'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/i,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
