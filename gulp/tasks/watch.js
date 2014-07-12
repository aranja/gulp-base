module.exports = function(gulp) {
  gulp.task('watch', function() {
    gulp.watch(gulp.config.source + '/styles/**/*.less', ['less']);
    gulp.watch(gulp.config.source + '/js/**/*.js', ['browserify']);
    gulp.watch([
        gulp.config.source + '/*.html',
        gulp.config.source + '/img/**/*.ico',
        gulp.config.source + '/fonts/**/*',
        gulp.config.source + '/videos/**/*'
    ], ['copy']);
    gulp.watch(gulp.config.source + '/views/**/*.jade', ['jade']);
  });
};
