const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const isProd = env === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public/scripts'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      publicPath: '/scripts/',
      historyApiFallback: true,
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
  };
};
