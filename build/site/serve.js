import gulp     from 'gulp';
import webpack  from 'webpack';
import url      from 'url';
// import proxy    from 'proxy-middleware';
import serve    from 'browser-sync';
import config   from './config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

//启动doc文档
gulp.task('serve', () => {
    const webpackConfig = require('./webpack.dev.config').default;

    // var proxyOptions = url.parse('http://localhost:8012/');

    // proxyOptions.route = '/laoui';

    webpackConfig.entry.app = [
        // 启用webpack HRM
        'webpack-hot-middleware/client?reload=true'
    ].concat(config.webpack.entry);

    var compiler = webpack(webpackConfig);

    serve({
        port: process.env.PORT || config.serverPort,
        open: false,
        server: { baseDir: config.paths.doc },
        middleware: [
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: true,
                    chunks: false,
                    modules: false
                },
                publicPath: webpackConfig.output.publicPath
            }),
            webpackHotMiddleware(compiler, {
                log: console.log
            })/*,
            proxy(proxyOptions)*/
        ]
    })
});
