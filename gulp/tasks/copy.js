module.exports = function(gulp, gutil) {
  gulp.task('copy', function() {
    var livereload = require('gulp-livereload');
    var prod = gutil.env.prod;
    var source = gulp.config.source;

    gulp.src([
      source + '/*.html',
      source + '/app.yaml',
      source + '/img/**/*.ico',
      source + '/fonts/**',
      source + '/videos/**'
    ], {base: source})
      .pipe(gulp.dest(gulp.config.target))
      .pipe(prod ? gutil.noop() : livereload());
  });
};
