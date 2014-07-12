var runSequence = require('run-sequence');

module.exports = function(gulp) {
  gulp.task('init', function(cb) {
    runSequence('bower', 'build', 'server', cb);
  });
};
