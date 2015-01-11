var runSequence = require('run-sequence');

module.exports = function(gulp) {
  gulp.task('init', function(cb) {
    runSequence('build', 'server', cb);
  });
};
