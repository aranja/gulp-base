var jshint = require('gulp-jshint');

module.exports = function(gulp) {
  var files = [
    gulp.config.source + '/js/**/*.js',
    './gulp/tasks/*.js'
  ];

  gulp.task('code-quality', function() {
    return gulp.srcWithErrorHandling(files)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });
};
