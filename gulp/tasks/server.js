var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config');

gulp.task('server', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: config.target
    }
  });
  gulp.watch(config.target + '/**/*').on('change', browserSync.reload);
});
