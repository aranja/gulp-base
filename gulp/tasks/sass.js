
module.exports = function(gulp, gutil) {

  gulp.task('sass', function() {
    var connect = require('gulp-connect');
    var sass = require('gulp-ruby-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var csso = require('gulp-csso');
    var prod = gutil.env.prod;

    return gulp.src('./src/scss/main.scss')
      .pipe(require('gulp-plumber')())
      .pipe(sass({
        style: prod ? 'compressed' : 'expanded',
        quiet: !prod
      }))
      .pipe( !prod ? gutil.noop() : csso() )
      .pipe(autoprefixer('> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'))
      .pipe(gulp.dest( prod ? './dist/css/' : './dev/css'))
      .pipe(prod ? gutil.noop() : connect.reload());
  });

};