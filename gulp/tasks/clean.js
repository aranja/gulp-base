module.exports = function(gulp, gutil) {
  var rimraf = require('rimraf');

  gulp.task('clean', function(cb) {
    var path = gutil.env.prod ? './dist' : './dev';
    rimraf(path, cb);
  });
};
