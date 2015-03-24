var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

module.exports = function(gulp) {
  var files = [
    gulp.config.source + '/js/**/*.js',
    './gulp/tasks/*.js'
  ];

  gulp.task('jscs', function() {
    return gulp.srcWithErrorHandling(files).pipe(jscs());
  });

  gulp.task('jshint', function() {
    return gulp.srcWithErrorHandling(files)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });

  gulp.task('code-quality', ['jshint', 'jscs']);
};
