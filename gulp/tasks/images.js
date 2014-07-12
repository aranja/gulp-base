module.exports = function(gulp, gutil) {
  var plumber = require('gulp-plumber');
  var changed = require('gulp-changed');
  var imagemin = require('gulp-imagemin');
  var connect = require('gulp-connect');

  var prod = gutil.env.prod;

  gulp.task('images', function() {
    return gulp.src('./app/img/**/*.{png,gif,jpg,jpeg,svg}')
      .pipe(plumber())
      .pipe(prod ? gutil.noop() : changed('./dev/img/'))

      .pipe(!prod ? gutil.noop() : imagemin())

      .pipe(gulp.dest(prod ? './dist/img/' : './dev/img/'))
      .pipe(prod ? gutil.noop() : connect.reload());
  });
};
