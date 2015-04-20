var gulp = require('gulp');
var open = require('gulp-open');

module.exports = function(config) {
  gulp.task('open', function() {
    gulp.src(config.target + '/index.html').pipe(open('', {
      url: 'http://localhost:' + config.port,
      app: 'Google Chrome'
    }));
  });
};
