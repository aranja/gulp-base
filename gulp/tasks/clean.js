var gulp = require('gulp');

module.exports = function(config) {
  var rimraf = require('rimraf');

  gulp.task('clean', function(cb) {
    rimraf(config.target, cb);
  });
};
