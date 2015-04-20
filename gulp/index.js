var gutil = require('gulp-util');
var glob = require('glob');
var tasks = glob.sync('*.js', {
  cwd: './gulp/tasks/'
});

var config = require(gutil.env.prod ? './config.prod.json' : './config.json');

tasks.forEach(function(task) {
  require('./tasks/' + task)(config);
});
