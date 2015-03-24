var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

module.exports = function(gulp) {
  var files = [
    gulp.config.source + '/js/**/*.js',
    './gulp/tasks/*.js'
  ];

  gulp.task('lint-jscs', function() {
    return gulp.srcWithErrorHandling(files).pipe(jscs());
  });

  gulp.task('lint-jshint', function() {
    return gulp.srcWithErrorHandling(files)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });

  gulp.task('lint', ['lint-jshint', 'lint-jscs']);
};
