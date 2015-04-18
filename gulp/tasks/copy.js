module.exports = function(gulp) {
  gulp.task('copy', function() {
    var source = gulp.config.source;

    gulp.src([
      source + '/*.html',
      source + '/app.yaml',
      source + '/img/**/*.ico',
      source + '/fonts/**',
      source + '/videos/**'
    ], {base: source})
      .pipe(gulp.dest(gulp.config.target));
  });
};
