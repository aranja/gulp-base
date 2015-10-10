import gulp from 'gulp';
import gutil from 'gulp-util';
import {readFileSync} from 'fs';
import runSequence from 'run-sequence';
import {exec} from 'child_process';
import config from '../config';

const {version} = gutil.env;

const appName = (() => {
  const appMatch = readFileSync(`${config.target}/app.yaml`, {encoding: 'utf8'}).match(/^application:\s*(.+)$/im);

  if (!appMatch || !appMatch[1]) {
    throw new Error('Could not find application name in app.yaml');
  }

  return appMatch[1];
})();

gulp.task('deploy-appengine', cb => {
  const cmd = `appcfg.py update --oauth2 ${config.target} ${version ? ('--version ' + version) : ''}`;
  const child = exec(cmd, cb);

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
});

gulp.task('deploy-log', function() {
  const appUrl = `https://${version ? version + '-dot-' : ''}${appName}.appspot.com/`;
  console.log('Deployed to', appUrl);
});

gulp.task('deploy', ['build'], cb => runSequence('deploy-appengine', 'deploy-log', cb));
