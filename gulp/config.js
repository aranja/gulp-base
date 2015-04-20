var gutil = require('gulp-util');
var assign = require('lodash.assign');

var config = {
  port: 3700,
  source: 'app',
  target: 'dev',
  minify: false,
  debug: true,

  env: {
    prod: {
      target: 'dist',
      minify: true,
      debug: false
    }
  }
};

// Extend with environment specific config
var env = gutil.env.env || gutil.env.prod ? 'prod' : 'dev';
assign(config, config.env[env]);

module.exports = config;
