var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');

module.exports = function(gulp, gutil) {
  var prod = gutil.env.prod;

  gulp.task('browserify', ['lint'], function() {
    return browserify({
        entries: ['./' + gulp.config.source + '/js/app.js'],
        debug: !prod
      })
      .bundle()
      .on('error', gulp.errorHandler)
      .pipe(source('app.js'))
      .pipe(!prod ? gutil.noop() : uglify({preserveComments: 'some'}))
      .pipe(gulp.dest(gulp.config.target + '/js/'));
  });
};
