module.exports = function (gulp) {
  gulp.task('build', ['clean'], function() {
    return gulp.start('copy', 'browserify', 'sass', 'jade');
  });
};