var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('server', function() {
  runSequence('scripts', 'open');
});
