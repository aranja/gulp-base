module.exports = function(gulp, gutil) {
  var rimraf = require('rimraf');

  gulp.task('clean', function(cb) {
    rimraf(gulp.config.target, cb);
  });
};
