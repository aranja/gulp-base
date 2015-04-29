var jade = require('gulp-jade');
var compileGuide = require('gulp-compile-guide');

module.exports = function(gulp, gutil) {
  var source = gulp.config.source;
  var prod = gutil.env.prod;
  
  gulp.task('styleguide-copy', function() {
    return gulp.src([source + '/styleguide/*', '!' + source + '/styleguide/index.jade'])
      .pipe(gulp.dest(gulp.config.target + '/styleguide'));
  });
  
  gulp.task('styleguide', ['styleguide-copy'], function() {
    return gulp.src(source + '/components/**/*.md')
      .pipe(compileGuide({
        layout: source + '/styleguide/index.jade'
      }))
      .pipe(gulp.dest(gulp.config.target + '/styleguide'));
  });
};
