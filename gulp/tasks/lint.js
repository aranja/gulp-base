'use strict';

module.exports = function(gulp) {
  var eslint = require('gulp-eslint');
  var jscs = require('gulp-jscs');

  var files = [
    gulp.config.source + '/js/**/*.js',
    './gulp/**/*.js'
  ];

  gulp.task('jscs', function() {
    return gulp.src(files)
      .pipe(jscs());
  });

  gulp.task('eslint', function() {
    return gulp.src(files)
      .pipe(eslint())
      .pipe(eslint.format());
  });

  gulp.task('lint', ['jscs', 'eslint']);
};
