import webpack       from 'webpack';
import config        from './config';
import webpackConfig from './webpack.config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

webpackConfig.devtool = 'sourcemap';

webpackConfig.output = {
    filename: 'script/[name].js',
    publicPath: '',
    path: config.paths.site
};

webpackConfig.module.loaders = webpackConfig.module.loaders.concat([
    {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style","css?-url&sourceMap!less?sourceMap")
    }
]);

webpackConfig.plugins = webpackConfig.plugins.concat([

    new CopyWebpackPlugin([
        {from: 'doc/data', to: 'data'},
        {from: 'doc/laoui', to: 'laoui'},
        {from: 'doc/images', to: 'images'},
        {from: 'doc/lib', to: 'lib'},
        {from: 'doc/fonts', to: 'fonts'}
    ]),

    new webpack.DefinePlugin({ 'env':'"online"' }),

    /**
     * 压缩js
     */
    new webpack.optimize.UglifyJsPlugin({
        compress: {
             warnings: false  //去掉警告信息
        },
        mangle: {
            except: ['$super', '$', 'exports', 'require', 'angular'],
            //不混淆类名（避免controller注入后，无法通过原来的名称找到）
            keep_fnames: true    
        }
    }),

    /**
     * 将webpack中css抽出存入单独文件
     */
    new ExtractTextPlugin('styles/[name].min.css',{
        allChunks: true
    })
]);

export default webpackConfig;