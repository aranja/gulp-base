
module.exports = function(gulp, gutil) {

  gulp.task('copy', function() {
    var connect = require('gulp-connect');
    var prod = gutil.env.prod;
    var path = prod ? './dist' : './dev';

    gulp.src('./src/*.html')
      .pipe( gulp.dest(path + '/') )
      .pipe( prod ? gutil.noop() : connect.reload() );
    gulp.src('./src/img/**/*.ico')
      .pipe( gulp.dest(path + '/img/') )
      .pipe( prod ? gutil.noop() : connect.reload() );
    gulp.src('./src/js/vendor/*.js')
      .pipe( gulp.dest(path + '/js/vendor/') )
      .pipe( prod ? gutil.noop() : connect.reload() );
    gulp.src('./src/fonts/**')
      .pipe( gulp.dest(path + '/fonts/') )
      .pipe( prod ? gutil.noop() : connect.reload() );
    gulp.src('./src/videos/**')
      .pipe( gulp.dest(path + '/videos/') )
      .pipe( prod ? gutil.noop() : connect.reload() );
  });

};