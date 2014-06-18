module.exports = function(gulp, gutil) {
  var jade = require('gulp-jade');
  var connect = require('gulp-connect');
  var plumber = require('gulp-plumber');
  var notify = require('gulp-notify');
  var prod = gutil.env.prod;

  gulp.task('jade', function() {
    return gulp.src('./app/views/*.jade')
      .pipe(plumber())
      .pipe(jade({pretty: !prod}))
      .on('error', notify.onError(function(error){
        return error.message.split('\n').pop();
      }))
      .pipe(gulp.dest(prod ? './dist/' : './dev/'))
      .pipe(prod ? gutil.noop() : connect.reload());
  });

};