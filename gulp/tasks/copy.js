var gulp = require('gulp');
var config = require('../config');

gulp.task('copy', function() {
  gulp.src([
    config.source + '/*.html',
    config.source + '/app.yaml',
    config.source + '/images/**/*.ico',
    config.source + '/fonts/**',
    config.source + '/videos/**'
  ], {base: config.source})
    .pipe(gulp.dest(config.target));
});
