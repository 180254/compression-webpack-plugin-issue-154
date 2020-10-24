const path = require('path');
const zlib = require('zlib');

const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = (env, argv) => {

  return {
    target: ['web', 'es5'],
    entry: {
      app: path.resolve(__dirname, 'index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules: [],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js'),
            to: 'jquery.js',
          },
        ],
      }),
      new CompressionPlugin({
        algorithm: 'brotliCompress',
        filename: '[path][base]-compressionOptions-params-BROTLI_PARAM_QUALITY-11.br',
        test: /\.js$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11
          }
        },
        minRatio: Infinity,
      }),
    ]
  };
};
