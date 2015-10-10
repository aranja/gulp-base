import notify from 'gulp-notify';
import gutil from 'gulp-util';

export default function(err) {
  notify.onError(err).apply(this, arguments);
  gutil.log(gutil.colors.red(err.toString()));
  this.emit('end');
};
