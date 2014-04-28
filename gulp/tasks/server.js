module.exports = function (gulp) {
  gulp.task('server', ['connect', 'watch', 'open']);
};