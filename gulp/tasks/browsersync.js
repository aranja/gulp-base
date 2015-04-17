var browserSync = require('browser-sync').create();

module.exports = function(gulp) {
  gulp.task('browsersync', ['watch'], function() {
    browserSync.init({
      server: {
        baseDir: gulp.config.target
      }
    });
    gulp.watch(gulp.config.target + '/**/*').on('change', browserSync.reload);
  });
};
