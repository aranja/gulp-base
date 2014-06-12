module.exports = function (gulp, gutil) {
  var plumber = require('gulp-plumber');
  var filter = require('gulp-filter');
  var changed = require('gulp-changed');
  var imagemin = require('gulp-imagemin');
  var svgmin = require('gulp-svgmin');
  var connect = require('gulp-connect');

  var prod  = gutil.env.prod;
  var imgFilter = filter('**/*.{png,gif,jpg,jpeg}');
  var svgFilter = filter('**/*.svg');

  gulp.task('images', function() {
    return gulp.src('./app/img/**/*.{png,gif,jpg,jpeg,svg}')
      .pipe( plumber() )
      .pipe( prod ? gutil.noop() : changed('./dev/img/') )
    
      .pipe( imgFilter )
      .pipe( !prod ? gutil.noop() : imagemin() )
      .pipe( imgFilter.restore() )

      .pipe( svgFilter )
      .pipe( !prod ? gutil.noop() : svgmin() )
      .pipe( svgFilter.restore() )

      .pipe( gulp.dest(prod ? './dist/img/' : './dev/img/') )
      .pipe( prod ? gutil.noop() : connect.reload() );
  });
};