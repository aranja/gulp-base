var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');

module.exports = function(gulp, gutil) {
  var livereload = require('gulp-livereload');
  var prod = gutil.env.prod;

  gulp.task('less', function() {
    return gulp.srcWithErrorHandling(gulp.config.source + '/styles/**/*.less')
      .pipe(less({
        paths: [
          gulp.config.source + '/styles',
          'node_modules'
        ],
        rootpath: '../../',
        relativeUrls: true,
        strictMath: true,
        strictUnits: true
      }))
      .pipe(!prod ? gutil.noop() : csso())
      .pipe(autoprefixer({
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      }))
      .pipe(gulp.dest(gulp.config.target + '/css'))
      .pipe(prod ? gutil.noop() : livereload());
  });
};
