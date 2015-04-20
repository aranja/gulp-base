var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

module.exports = function(gulp, gutil) {
  var prod = gutil.env.prod;

  gulp.task('browserify', ['lint'], function() {
    return browserify({
        entries: ['./' + gulp.config.source + '/js/app.js'],
        debug: !prod
      })
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(!prod ? gutil.noop() : uglify({preserveComments: 'some'}))
      .on('error', gulp.errorHandler)
      .pipe(gulp.dest(gulp.config.target + '/js/'));
  });
};
