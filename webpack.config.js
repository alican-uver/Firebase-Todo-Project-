var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ["@babel/polyfill", "./Src/javascript/index.js"],
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: 'bundle.js'
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
                },
            }
        ]
    },
    devServer: {
        port: 3200,
        index: 'index.html',
        open: true
    }
};