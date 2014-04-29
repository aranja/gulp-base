module.exports = function (gulp) {
  gulp.task('init', ['submodules'], function() {
    return gulp.start('build', 'bower');
  });
};