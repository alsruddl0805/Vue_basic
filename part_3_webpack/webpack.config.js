const { Module } = require("webpack");
const VueLoaderPlugin = require ('vue-loader/lib/plugin');
const path = require ('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/, // .vue로 끝나는 파일
            loader: 'vue-loader'
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname,'dist'),
    },
};