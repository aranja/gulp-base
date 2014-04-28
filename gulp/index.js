var gulp = require('gulp');
var gutil = require('gulp-util');
var glob = require('glob');
var tasks = glob.sync('*.js', { cwd: './gulp/tasks/' });

tasks.forEach(function(task) {
  require('./tasks/' + task)(gulp, gutil);
});