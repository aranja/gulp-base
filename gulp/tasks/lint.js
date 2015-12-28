import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import config from '../config';

const files = [
  `${config.source}/scripts/**/*.js`,
  './gulp/tasks/*.js'
];

gulp.task('lint-jscs', () => {
  return gulp.src(files)
    .pipe(jscs());
});

gulp.task('lint-jshint', () => {
  return gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint', ['lint-jshint', 'lint-jscs']);
