module.exports = function(gulp, gutil) {
  gulp.task('less', function() {
    var connect = require('gulp-connect');
    var less = require('gulp-less');
    var autoprefixer = require('gulp-autoprefixer');
    var csso = require('gulp-csso');
    var plumber = require('gulp-plumber');
    var prod = gutil.env.prod;

    return gulp.src(gulp.config.source + '/styles/**/*.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(!prod ? gutil.noop() : csso())
      .pipe(autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'))
      .on('error', gutil.log)
      .pipe(gulp.dest(gulp.config.target + '/css'))
      .pipe(prod ? gutil.noop() : connect.reload());
  });
};
