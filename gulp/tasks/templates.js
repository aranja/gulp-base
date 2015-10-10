import gulp from 'gulp';
import jade from 'gulp-jade';
import config from '../config';
import errorHandler from '../utils/error-handler';

gulp.task('templates', () => {
  return gulp.src(`${config.source}/templates/*.jade`)
    .pipe(jade({
      pretty: config.debug
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target));
});
