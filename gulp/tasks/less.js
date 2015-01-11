module.exports = function(gulp, gutil) {
  gulp.task('less', function() {
    var plumber = require('gulp-plumber');
    var connect = require('gulp-connect');
    var less = require('gulp-less');
    var autoprefixer = require('gulp-autoprefixer');
    var csso = require('gulp-csso');
    var prod = gutil.env.prod;
    var watch = require('gulp-watch');

    return gulp.srcWithErrorHandling(gulp.config.source + '/styles/**/*.less')
      .pipe(less())
      .on('error', gutil.log)
      .pipe(autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'))
      .pipe(!prod ? gutil.noop() : csso())
      .pipe(gulp.dest(gulp.config.target + '/css'))
      .pipe(prod ? gutil.noop() : connect.reload());
  });
};
