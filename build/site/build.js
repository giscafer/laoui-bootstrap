import gulp     from 'gulp';
import gutil    from 'gulp-util';
import del      from 'del';
import webpack  from 'webpack';
import config   from './config';

gulp.task('clean-build-doc', () => {
    del([config.paths.site]).then(function (paths) {
        gutil.log("[clean]", paths);
    })
});

//编译发布doc
gulp.task('build-doc', ['clean-build-doc'], () => {
    const webpackConfig = require('./webpack.dist.config').default;

    webpackConfig.entry.app = config.webpack.entry;

    webpack(webpackConfig, (err, stats) => {
        if(err) {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            colors: true,
            chunks: false,
            errorDetails: true
        }));
    });
});


