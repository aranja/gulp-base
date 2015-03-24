module.exports = function(gulp, gutil) {
  var browserify = require('browserify');
  var connect = require('gulp-connect');
  var uglify = require('gulp-uglify');
  var transform = require('vinyl-transform');
  var prod = gutil.env.prod;

  var browserified = transform(function(filename) {
    var b = browserify({
      debug: !prod,
      entries: filename
    });
    return b.bundle();
  });

  gulp.task('browserify', ['lint'], function() {
    return gulp.srcWithErrorHandling(gulp.config.source + '/js/app.js')
      .pipe(browserified)
      .pipe(!prod ? gutil.noop() : uglify({preserveComments: 'some'}))
      .pipe(gulp.dest(gulp.config.target + '/js/'))
      .pipe(prod ? gutil.noop() : connect.reload());
  });
};
