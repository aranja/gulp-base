module.exports = function(gulp) {

  gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss',['sass']);
    gulp.watch('src/js/**/*.js',['browserify']);
    gulp.watch(['src/*.html','src/img/**/*.ico','src/fonts/**/*','src/videos/**/*'],['copy']);
    gulp.watch('src/views/**/*.jade',['jade']);
  });

};