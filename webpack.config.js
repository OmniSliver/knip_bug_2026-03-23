import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'node:path'

export default {
  entry: './src/app.jsx',

  mode: 'production',
  module: {
    rules: [
      {
        exclude: [path.resolve(import.meta.dirname, 'node_modules/')],
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: '.cache/babelLoader',
              presets: [
                '@babel/preset-env',
                ['@babel/react', { runtime: 'automatic' }],
              ],
            },
          },
        ],
      },
    ],
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('www'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: 'module',
      template: 'src/index.html',
    }),
  ],
}
