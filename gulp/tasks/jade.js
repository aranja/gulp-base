module.exports = function(gulp, gutil) {
  var jade = require('gulp-jade');
  var connect = require('gulp-connect');
  var errorHandler = require('./error-handler');
  var prod = gutil.env.prod;

  gulp.task('jade', function() {
    return gulp.srcWithErrorHandling(gulp.config.source + '/views/*.jade')
      .pipe(jade({
        pretty: !prod
      }))
      .pipe(gulp.dest(gulp.config.target))
      .pipe(prod ? gutil.noop() : connect.reload());
  });
};
