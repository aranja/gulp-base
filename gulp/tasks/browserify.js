var browserify = require('browserify');
var uglify = require('gulp-uglify');
var transform = require('vinyl-transform');

module.exports = function(gulp, gutil) {
  var prod = gutil.env.prod;

  var bundle = transform(function(filename) {
    return browserify({
      debug: !prod,
      entries: filename
    }).bundle();
  });

  gulp.task('browserify', ['lint'], function() {
    return gulp.srcWithErrorHandling(gulp.config.source + '/js/app.js')
      .pipe(bundle)
      .pipe(!prod ? gutil.noop() : uglify({preserveComments: 'some'}))
      .pipe(gulp.dest(gulp.config.target + '/js/'));
  });
};
