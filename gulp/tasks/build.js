import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], (cb) => {
  runSequence('copy', 'scripts', 'styles', 'templates', 'images', cb);
});
