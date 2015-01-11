var runSequence = require('run-sequence');

module.exports = function(gulp) {
  gulp.task('server', function() {
    runSequence('watch', 'connect', 'open');
  });
};
