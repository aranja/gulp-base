module.exports = function(gulp, gutil) {
  var clean = require('gulp-clean');

  gulp.task('clean', function() {
    var path = gutil.env.prod ? './dist' : './dev';
    return gulp.src(path +'/*', {read: false}).pipe( clean() );
  });

};