var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: ["@babel/polyfill", "./src/javascript/Modules/index.js"],
      register: ["./src/javascript/Modules/register.js"],
      login: ["./src/javascript/Modules/login.js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
              }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: './public/register.html',
            filename: 'register.html',
            chunks: ["register"]
        }),
        new HtmlWebpackPlugin({
            template: './public/login.html',
            filename: 'login.html',
            chunks: ["login"]
        }),
    ],
    devServer: {
        port: 3200,
        contentBase: path.resolve(__dirname, './src/Javascript/Modules'),
        compress: true,
        watchContentBase: true,
    },
};
