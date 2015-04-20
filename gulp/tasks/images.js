var gulp = require('gulp');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var errorHandler = require('../utils/error-handler');

module.exports = function(config) {
  gulp.task('images', function() {
    return gulp.src(config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}')
      .pipe(!config.minify ? changed(config.target + '/img/') : gutil.noop())
      .pipe(config.minify ? imagemin() : gutil.noop())
      .on('error', errorHandler)
      .pipe(gulp.dest(config.target + '/img/'));
  });
};
