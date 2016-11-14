import gulp from 'gulp';
import gutil from 'gulp-util';
import del from 'del';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import config from './config';
const webpackConfig = require('./webpack.config').default;
const markedFile=require('../marked/index.js');

gulp.task('clean-dist', () => {
    del([config.paths.dist]).then((paths) => {
        gutil.log("[clean]", paths);
    });
});


gulp.task('build', ['clean-dist'], () => {
    webpackConfig.entry.app = config.webpack.entry;
    let copy= new CopyWebpackPlugin([
        {from: config.paths.fonts, to: 'fonts'}
    ]);
    webpackConfig.plugins.push(copy);
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            colors: true,
            chunks: false,
            errorDetails: true
        }));
    });
});

//
gulp.task('clean-doc', () => {
    del([config.paths.doc]).then((paths) => {
        gutil.log("[clean-doc]", paths);
    })
});
gulp.task('doc', ['clean-doc'], () => {
    markedFile();
    webpackConfig.entry.app = config.webpack.entry;
    webpackConfig.output = {
        filename: 'script/laoui.js',
        path: config.paths.doc
    };
    let copy= new CopyWebpackPlugin([
             {from: config.paths.fonts, to: 'fonts'}
        ]);
    webpackConfig.plugins.push(copy);
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            colors: true,
            chunks: false,
            errorDetails: true
        }));
    });
});
