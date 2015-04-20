var gulp = require('gulp');

module.exports = function(config) {
  gulp.task('copy', function() {
    gulp.src([
      source + '/*.html',
      source + '/app.yaml',
      source + '/img/**/*.ico',
      source + '/fonts/**',
      source + '/videos/**'
    ], {base: config.source})
      .pipe(gulp.dest(config.target));
  });
};
