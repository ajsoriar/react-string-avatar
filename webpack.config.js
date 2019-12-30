const path = require('path');

const libraryName = 'library';
const outputFile = `${libraryName}.js`;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  // entry: './src/react-string-avatar.js',
  entry: {
    'react-string-avatar': './src/react-string-avatar.js',
    'react-string-avatar.min': './src/react-string-avatar.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  output: {
    filename: outputFile, // 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // filename: 'react-string-avatar.js',
    filename: '[name].js',
    library: ''
    // libraryTarget: 'var'
    // libraryTarget: 'commonJS'
    /*
    libraryTarget: 'umd',
    umdNamedDefine: true
    */
  },
  // externals: ['react', 'prop-types'], // This line is key! or React will be included in the bundle!!!
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};

module.exports = config;
