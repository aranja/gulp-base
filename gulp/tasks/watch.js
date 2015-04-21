var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var config = require('../config');

gulp.task('watch', ['build'], function() {
  livereload.listen();

  watch(config.source + '/styles/**/*.less', function() {
    gulp.start('less');
  });

  watch(config.source + '/js/**/*.js', function() {
    gulp.start('browserify');
  });

  watch([
    config.source + '/*.html',
    config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}',
    config.source + '/fonts/**/*',
    config.source + '/videos/**/*'
  ], function() {
    gulp.start('copy');
  });

  watch(config.source + '/views/**/*.jade', function() {
    gulp.start('jade');
  });

  watch(config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}', function() {
    gulp.start('images');
  });
});
