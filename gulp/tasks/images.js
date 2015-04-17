module.exports = function(gulp, gutil) {
  var changed = require('gulp-changed');
  var imagemin = require('gulp-imagemin');
  var prod = gutil.env.prod;

  gulp.task('images', function() {
    return gulp.srcWithErrorHandling(gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}')
      .pipe(prod ? gutil.noop() : changed(gulp.config.target + '/img/'))
      .pipe(!prod ? gutil.noop() : imagemin())
      .pipe(gulp.dest(gulp.config.target + '/img/'));
  });
};
