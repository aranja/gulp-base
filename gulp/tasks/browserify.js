module.exports = function (gulp, gutil) {
  var notify = require('gulp-notify');
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var connect = require('gulp-connect');
  var prod = gutil.env.prod;

  function handleErrors() {
    notify.onError({
      title: "Compile Error",
      message: "<%= error.message %>"
    }).apply(this, arguments);
    this.emit('end');
  }

  gulp.task('browserify', function() {
    return browserify({
        entries: ['./' + gulp.config.source + '/js/app.js'],
        debug: !prod
      })
      .bundle()
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(gulp.dest(gulp.config.target + '/js/'))
      .pipe(prod ? gutil.noop() : connect.reload());
  });
};
