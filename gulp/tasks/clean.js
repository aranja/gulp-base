import gulp from 'gulp';
import config from '../config';
import rimraf from 'rimraf';

gulp.task('clean', cb => rimraf(config.target, cb));
