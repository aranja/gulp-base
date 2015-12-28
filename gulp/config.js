import gutil from 'gulp-util';
import assign from 'lodash.assign';

const config = {
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
assign(config, config.env[gutil.env.env || (gutil.env.prod ? 'prod' : 'dev')]);
export default config;
