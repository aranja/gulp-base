module.exports = function (gulp) {
  var open = require('gulp-open');
  var config = require('../config.json');
 
  gulp.task('open', function() {
    gulp.src('./dev/index.html').pipe(open('', {
      url: 'http://localhost:' + config.port,
      app: 'Google Chrome'
    }));
  });
};