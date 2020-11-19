import * as path from 'path';
import * as webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    target: 'node',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.tsx?/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}
module.exports = config;