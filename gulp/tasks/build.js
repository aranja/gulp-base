var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function() {
  gulp.task('build', ['clean'], function(cb) {
    runSequence('copy', 'browserify', 'less', 'jade', 'images', cb);
  });
};
