module.exports = function(gulp) {
  gulp.task('watch', ['build'], function() {
    gulp.watch(gulp.config.source + '/styles/**/*.less', ['less']);
    gulp.watch(gulp.config.source + '/js/**/*.js', ['browserify']);
    gulp.watch([
        gulp.config.source + '/*.html',
        gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}',
        gulp.config.source + '/fonts/**/*',
        gulp.config.source + '/videos/**/*'
    ], ['copy']);
    gulp.watch(gulp.config.source + '/views/**/*.jade', ['jade']);
    gulp.watch(gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}', ['images']);
  });
};
