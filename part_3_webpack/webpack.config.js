const { Module } = require("webpack");

module.exports = {
    entry: {
        app: './main.js'
    },
    module: {
        rules: [{
            
        }],
    },
    plugins: [],
    output: {
        filename: '[name].js',
        path: './dist'
    },
};