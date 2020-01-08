const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    // entry: './src/react-string-avatar.js',
    entry: {
        'react-string-avatar': './src/react-string-avatar.js',
        'react-string-avatar.min': './src/react-string-avatar.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'react-string-avatar.js',
        filename: '[name].js',
        library: 'react-string-avatar',
        // libraryTarget: 'var'
        // libraryTarget: 'commonJS'
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
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
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    // externals: ['react', 'prop-types'], // This line is key! or React will be included in the bundle!!!
    // externals: {
    //   'react': 'React',
    //   'react-dom': 'ReactDOM',
    //   'react-router': 'ReactRouter'
    // },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM'
        }
    }
};

module.exports = config;
