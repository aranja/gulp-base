module.exports = function(gulp, gutil) {
  var config = require('../config.json');
  var connect = require('gulp-connect');
  var prod = gutil.env.prod;

  gulp.task('connect', function () {
    connect.server({
      root: [(prod ? './dist' : './dev')],
      port: (prod ? 8000 : config.port),
      livereload: !prod
    });
  });
};