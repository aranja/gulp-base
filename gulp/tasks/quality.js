var jshint = require('gulp-jshint');

module.exports = function(gulp, gutil) {
  gulp.task('code-quality', function() {
    return gulp.srcWithErrorHandling([
      gulp.config.source + '/js/**/*.js',
      './gulp/tasks/*.js'
    ])
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });
};