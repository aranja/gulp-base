import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('server', ['watch'], function() {
  browserSync.create().init({
    files: `${config.target}/**/*`,
    server: {
      baseDir: config.target
    }
  });
});
