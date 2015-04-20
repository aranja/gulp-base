var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var errorHandler = require('../utils/error-handler');

module.exports = function(gulp, gutil) {
  var prod = gutil.env.prod;

  gulp.task('less', function() {
    return gulp.src(gulp.config.source + '/styles/**/*.less')
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
      .pipe(!prod ? gutil.noop() : minifyCSS())
      .pipe(autoprefixer({
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      }))
      .on('error', errorHandler)
      .pipe(gulp.dest(gulp.config.target + '/css'));
  });
};
