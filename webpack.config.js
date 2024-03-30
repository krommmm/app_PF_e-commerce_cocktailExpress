const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: './SRC/JS/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};