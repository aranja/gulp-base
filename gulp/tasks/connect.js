module.exports = function(gulp) {
  var connect = require('gulp-connect');

  gulp.task('connect', function() {
    connect.server({
      root: [gulp.config.target],
      port: gulp.config.port
    });
  });
};
