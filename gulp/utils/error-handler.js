var notify = require('gulp-notify');

module.exports = function(err) {
  notify.onError(err).apply(this, arguments);
  gutil.log(gutil.colors.red(err.toString()));
  this.emit('end');
};
