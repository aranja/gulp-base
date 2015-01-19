'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var glob = require('glob');
var tasks = glob.sync('*.js', {
  cwd: './gulp/tasks/'
});

gulp.config = require(gutil.env.prod ? './config.prod.json' : './config.json');

var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.srcWithErrorHandling = function() {
  return gulp.src.apply(gulp, Array.prototype.slice.call(arguments))
    .pipe(plumber(function(err) {
      notify.onError(err).apply(this, arguments);
      gutil.log(gutil.colors.red(err.toString()));
      this.emit('end');
    }));
};

tasks.forEach(function(task) {
  require('./tasks/' + task)(gulp, gutil);
});
