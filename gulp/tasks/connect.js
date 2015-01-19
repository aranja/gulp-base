'use strict';

module.exports = function(gulp, gutil) {
  var connect = require('gulp-connect');
  var prod = gutil.env.prod;

  gulp.task('connect', function() {
    connect.server({
      root: [gulp.config.target],
      port: gulp.config.port,
      livereload: !prod
    });
  });
};
