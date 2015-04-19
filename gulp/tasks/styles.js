var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var config = require('../config');
var errorHandler = require('../utils/error-handler');

gulp.task('styles', function() {
  return gulp.src(config.source + '/styles/**/*.less')
    .pipe(less({
      paths: [
        config.source + '/styles',
        'node_modules'
      ],
      rootpath: '../../',
      relativeUrls: true,
      strictMath: true,
      strictUnits: true
    }))
    .pipe(config.minify ? minifyCSS() : gutil.noop())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target + '/css'));
});
