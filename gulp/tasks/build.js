module.exports = function (gulp) {
  gulp.task('build', ['clean', 'bower'], function() {
    return gulp.start('copy', 'browserify', 'sass', 'jade');
  });
};