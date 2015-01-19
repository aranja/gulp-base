'use strict';

var runSequence = require('run-sequence');

module.exports = function(gulp) {
  gulp.task('build', ['clean'], function(cb) {
    runSequence('copy', 'browserify', 'less', 'jade', 'images', cb);
  });
};
