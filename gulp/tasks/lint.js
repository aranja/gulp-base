'use strict';

module.exports = function(gulp) {
  var eslint = require('gulp-eslint');

  gulp.task('lint', function() {
    return gulp.src([
      gulp.config.source + '/js/**/*.js',
      './gulp/**/*.js'
    ])
      .pipe(eslint())
      .pipe(eslint.format());
  });
};
