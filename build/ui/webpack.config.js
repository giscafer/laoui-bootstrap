import webpack from 'webpack';
import config from './config';
import path from 'path';
import ExtractTextPlugin from "extract-text-webpack-plugin";

const BASE64_LIMIT = 2048;

export default {
    entry: {},
    output: {
        filename: 'script/' + config.filename + '.js',
        publicPath: '',
        path: config.paths.dist
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/, path.resolve(__dirname, './src/unknown')],
            loader: 'ng-annotate!babel'
        }, {
            // HTML LOADER
            // Reference: https://github.com/webpack/raw-loader
            // Allow loading html through js
            test: /\.html$/,
            loader: 'ngtemplate!raw'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?name=images/[name]_[hash:8].[ext]&limit=" + BASE64_LIMIT
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style", "css?-url&sourceMap!less?sourceMap")
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css?-url&sourceMap!less?sourceMap")
        }, {
            include: /\.json$/,
            loaders: ['json-loader']
        }]
    },
    resolveLoader: {
        noParse: []
    },
    plugins: [
        new webpack.DefinePlugin({ 'env': '"online"' }),

        /**
         * 压缩js
         */
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false //去掉警告信息
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'angular'],
                //不混淆类名（避免controller注入后，无法通过原来的名称找到）
                keep_fnames: true
            }
        }),*/

        /**
         * 将webpack中css抽出存入单独文件
         */
        new ExtractTextPlugin('styles/' + config.filename + '.min.css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
