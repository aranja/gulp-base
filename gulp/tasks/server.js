var gulp = require('gulp');
var gopen = require('gulp-open');
var browserSync = require('browser-sync').create();
var config = require('../config');

gulp.task('server-browsersync', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: config.target
    }
  });
  gulp.watch(config.target + '/**/*').on('change', browserSync.reload);
});

gulp.task('server', ['server-browsersync'], function() {
  gulp.src(config.target + '/index.html').pipe(gopen('', {
    url: 'http://localhost:' + config.port,
    app: 'Google Chrome'
  }));
});
