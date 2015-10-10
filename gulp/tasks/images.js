import gulp from 'gulp';
import gutil from 'gulp-util';
import changed from 'gulp-changed';
import minify from 'gulp-imagemin';
import config from '../config';
import errorHandler from '../utils/error-handler';

gulp.task('images', () => {
  return gulp.src(`${config.source}/images/**/*.{png,gif,jpg,jpeg,svg}`)
    .pipe(!config.minify ? changed(`${config.target}/images/`) : gutil.noop())
    .pipe(config.minify ? minify() : gutil.noop())
    .on('error', errorHandler)
    .pipe(gulp.dest(`${config.target}/images/`));
});
