import gulp from 'gulp';
import config from '../config';

gulp.task('copy', () => {
  gulp.src([
    `${config.source}/*.html`,
    `${config.source}/app.yaml`,
    `${config.source}/images/**/*.ico`,
    `${config.source}/fonts/**`,
    `${config.source}/videos/*`
  ], {base: config.source})
    .pipe(gulp.dest(config.target));
});
