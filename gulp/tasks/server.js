var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function() {
  gulp.task('server', function() {
    runSequence('browsersync', 'open');
  });
};
