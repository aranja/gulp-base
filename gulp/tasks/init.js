var exec = require('child_process').exec;

module.exports = function (gulp) {
  gulp.task('init', function () {
    exec('gulp bower; gulp build; gulp server', function (err, stdout) {
      if (err) {
        return console.log(err);
      }

      console.log( stdout );
    });
  });
};