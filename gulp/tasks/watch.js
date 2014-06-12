module.exports = function(gulp) {

  gulp.task('watch', function() {
    gulp.watch('app/styles/**/*.less',['less']);
    gulp.watch('app/js/**/*.js',['browserify']);
    gulp.watch(['app/*.html','app/img/**/*.ico','app/fonts/**/*','app/videos/**/*'],['copy']);
    gulp.watch('app/views/**/*.jade',['jade']);
  });

};