var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

module.exports = function(gulp) {
  var files = [
    gulp.config.source + '/js/**/*.js',
    './gulp/tasks/*.js'
  ];

  gulp.task('lint-jscs', function() {
    return gulp.src(files)
      .pipe(jscs());
  });

  gulp.task('lint-jshint', function() {
    return gulp.src(files)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });

  gulp.task('lint', ['lint-jshint', 'lint-jscs']);
};
