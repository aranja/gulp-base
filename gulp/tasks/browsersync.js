var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function(config) {
  gulp.task('browsersync', ['watch'], function() {
    browserSync.init({
      server: {
        baseDir: config.target
      }
    });
    gulp.watch(config.target + '/**/*').on('change', browserSync.reload);
  });
};
