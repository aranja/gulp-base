var gulp = require('gulp');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var errorHandler = require('../utils/error-handler');

module.exports = function(config) {
  gulp.task('jade', function() {
    return gulp.src(config.source + '/views/*.jade')
      .pipe(jade({
        pretty: config.debug
      }))
      .on('error', errorHandler)
      .pipe(gulp.dest(config.target));
  });
};
