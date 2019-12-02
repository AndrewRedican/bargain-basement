const path = require('path'),
  webpack = require('webpack'),
  TerserPlugin = require('terser-webpack-plugin'),
  package = require('./package.json'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyPlugin = require('copy-webpack-plugin'),
  NODE_ENV = process.env.NODE_ENV,
  BUILD_ENV = process.env.BUILD_ENV

const defines = {
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  'process.env.VERSION': JSON.stringify(package.version)
}

let output,
  devtool,
  plugins = [
    new webpack.DefinePlugin(defines),
    new HtmlWebpackPlugin({
      title: `${package.name} (version ${package.version})`,
      template: './src/index.html',
      favicon: 'src/assets/icons/png/basil.png'
    })
  ]

/**
 * TODO DEFINE CONFIG FOR BUILD_ENV
 */

switch (NODE_ENV) {
  case 'development':
    console.log('WEBPACK - DEV')
    output = {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    }
    devtool = 'eval-source-map'
    break
  case 'production':
    console.log('WEBPACK - PRODUCTION')
    output = {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/'
    }
    devtool = false
    plugins.push(
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6
        }
      })
    )
    plugins.push(
      new CopyPlugin([
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'public/src/assets')
        }
      ])
    )
    break
  case 'default':
    console.log('WEBPACK - DEFAULT')
    output = {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    }
    devtool = 'eval-source-map'
    break
}

const config = {
  target: 'web',
  mode: NODE_ENV,
  entry: ['./src/index.js'],
  output,
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'style!css!resolve-url!sass?sourceMap'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|woff|woff2|ttf)$/,
        loader: 'file-loader',
        options: {
          useRelativePath: process.env.NODE_ENV === 'production'
        }
      }
    ]
  },
  devtool,
  plugins,
  devServer: { historyApiFallback: true }
  // optimization: {
  //   minimize: false
  // }
}

module.exports = config
