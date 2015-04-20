var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var errorHandler = require('../utils/error-handler');

module.exports = function(config) {
  gulp.task('browserify', ['lint'], function() {
    return browserify({
        entries: ['./' + config.source + '/js/app.js'],
        debug: config.debug
      })
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(config.minify ? uglify({preserveComments: 'some'}) : gutil.noop())
      .on('error', errorHandler)
      .pipe(gulp.dest(config.target + '/js/'));
  });
};
