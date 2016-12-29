/**
 * Created by nalantianyi on 2016/12/29.
 */
var path = require('path');

module.exports = {
    entry: './index.js',
    devtool: 'sourcemap',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, './'),
                loader: 'babel'
            }
        ]
    }
};