var jade = require('gulp-jade');
var errorHandler = require('../utils/error-handler');

module.exports = function(gulp, gutil) {
  var prod = gutil.env.prod;

  gulp.task('jade', function() {
    return gulp.src(gulp.config.source + '/views/*.jade')
      .pipe(jade({
        pretty: !prod
      }))
      .on('error', errorHandler)
      .pipe(gulp.dest(gulp.config.target));
  });
};
