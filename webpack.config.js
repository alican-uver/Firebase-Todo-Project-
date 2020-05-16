var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: ["@babel/polyfill", "./Src/javascript/Modules/index.js"],
      register: ["./Src/javascript/Modules/register.js"],
      login: ["./Src/javascript/Modules/login.js"]
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
            template: './Src/Pages/index.html',
            filename: 'index.html',
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: './Src/Pages/register.html',
            filename: 'register.html',
            chunks: ["register"]
        }),
        new HtmlWebpackPlugin({
            template: './Src/Pages/login.html',
            filename: 'login.html',
            chunks: ["login"]
        }),
    ],
    devServer: {
        port: 3200,
        contentBase: path.resolve(__dirname, './Src/Javascript/Modules'),
        compress: true,
        watchContentBase: true,
    },
};
