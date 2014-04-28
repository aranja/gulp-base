var exec = require('child_process').exec;
var fs = require('fs');
var glob = require("glob");

var cwd = process.cwd();
var gitUpdate = 'git submodule init; git submodule update';

function init () {
  exec('git init', {cwd: 'src'}, function (err, stdout) {
    console.log(err ? err : stdout ? stdout : '');
  });
}

function clean () {
  var files = glob.sync(cwd + '/src/**/{.gitmodules,.git,README.md}');
    
  files.forEach(function (file) {
    fs.unlinkSync( file );
  });

  init();
}

function scss () {
  exec(gitUpdate, {cwd: 'src'}, function (err, stdout) {
    console.log(err ? err : stdout ? stdout : '');

    if (!err) {
      clean();
    }
  });
}

module.exports = function (gulp) {
  gulp.task('init', function src () {
    exec(gitUpdate, function (err, stdout) {
      console.log(err ? err : stdout ? stdout : '');
      if (!err) { scss(); }
    });
  });
};