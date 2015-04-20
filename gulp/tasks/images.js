var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var errorHandler = require('../utils/error-handler');

module.exports = function(gulp, gutil) {
  var prod = gutil.env.prod;

  gulp.task('images', function() {
    return gulp.src(gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}')
      .pipe(prod ? gutil.noop() : changed(gulp.config.target + '/img/'))
      .pipe(!prod ? gutil.noop() : imagemin())
      .on('error', errorHandler)
      .pipe(gulp.dest(gulp.config.target + '/img/'));
  });
};
