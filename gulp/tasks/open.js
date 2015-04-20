var gulp = require('gulp');
var gopen = require('gulp-open');
var config = require('../config');

gulp.task('open', function() {
  gulp.src(config.target + '/index.html').pipe(gopen('', {
    url: 'http://localhost:' + config.port,
    app: 'Google Chrome'
  }));
});
