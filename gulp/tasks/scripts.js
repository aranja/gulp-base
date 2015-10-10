import gulp from 'gulp';
import gutil from 'gulp-util';
import browserify from 'browserify';
import babelify from 'babelify';
import minify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import sourceMaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';
import config from '../config';
import errorHandler from '../utils/error-handler';

gulp.task('scripts', ['lint'], () => {
  return browserify({
      entries: [`./${config.source}/scripts/app.js`],
      debug: config.debug
    })
    .transform(babelify)
    .bundle()
    .on('error', errorHandler)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourceMaps.init({loadMaps: true}))
    .pipe(config.minify ? minify({preserveComments: 'some'}) : gutil.noop())
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest(`${config.target}/scripts/`));
});
