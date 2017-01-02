/**
 * Created by nalantianyi on 2016/12/29.
 */
var path = require('path');
var webpack=require('webpack');

module.exports = {
    entry: './src/index.js',
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
                include: path.join(__dirname, './src'),
                loader: 'babel'
            }
        ]
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false
    //         }
    //     })
    // ]
}
;