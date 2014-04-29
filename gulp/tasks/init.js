module.exports = function (gulp) {
  gulp.task('init', ['submodules'], function() {
    return gulp.start('bower', 'browserify', 'sass', 'jade', 'copy');
  });
};