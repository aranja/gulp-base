var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

module.exports = function(gulp) {
  livereload.listen();

  gulp.task('watch', ['build'], function() {
    watch(gulp.config.source + '/styles/**/*.less', function() {
      gulp.start('less');
    });

    watch(gulp.config.source + '/js/**/*.js', function() {
      gulp.start('browserify');
    });

    watch([
      gulp.config.source + '/*.html',
      gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}',
      gulp.config.source + '/fonts/**/*',
      gulp.config.source + '/videos/**/*'
    ], function() {
      gulp.start('copy');
    });

    watch(gulp.config.source + '/views/**/*.jade', function() {
      gulp.start('jade');
    });

    watch(gulp.config.source + '/img/**/*.{png,gif,jpg,jpeg,svg}', function() {
      gulp.start('images');
    });
  });
};
