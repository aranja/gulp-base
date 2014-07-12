module.exports = function(gulp, gutil) {
  var plumber = require('gulp-plumber');
  var changed = require('gulp-changed');
  var imagemin = require('gulp-imagemin');
  var connect = require('gulp-connect');

  var prod = gutil.env.prod;

  gulp.task('images', function() {
    return gulp.src(gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}')
      .pipe(plumber())
      .pipe(prod ? gutil.noop() : changed(gulp.config.target + '/img/'))

      .pipe(!prod ? gutil.noop() : imagemin())

      .pipe(gulp.dest(gulp.config.target + '/img/'))
      .pipe(prod ? gutil.noop() : connect.reload());
  });
};
