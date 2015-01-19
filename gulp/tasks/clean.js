'use strict';

module.exports = function(gulp) {
  var rimraf = require('rimraf');

  gulp.task('clean', function(cb) {
    rimraf(gulp.config.target, cb);
  });
};
