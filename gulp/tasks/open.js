'use strict';

module.exports = function(gulp) {
  var open = require('gulp-open');

  gulp.task('open', function() {
    gulp.src(gulp.config.target + '/index.html').pipe(open('', {
      url: 'http://localhost:' + gulp.config.port,
      app: 'Google Chrome'
    }));
  });
};
