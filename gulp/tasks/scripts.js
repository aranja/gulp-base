var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var config = require('../config');
var errorHandler = require('../utils/error-handler');

gulp.task('scripts', ['lint'], function() {
  return browserify({
      entries: ['./' + config.source + '/js/app.js'],
      debug: config.debug
    })
    .bundle()
    .on('error', errorHandler)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(config.minify ? uglify({preserveComments: 'some'}) : gutil.noop())
    .pipe(gulp.dest(config.target + '/js/'));
});
