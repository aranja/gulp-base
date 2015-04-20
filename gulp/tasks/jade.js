var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config');
var errorHandler = require('../utils/error-handler');

gulp.task('jade', function() {
  return gulp.src(config.source + '/views/*.jade')
    .pipe(jade({
      pretty: config.debug
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target));
});
