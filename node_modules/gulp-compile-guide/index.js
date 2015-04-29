var consolidate = require('consolidate');
var gulpUtil = require('gulp-util');
var highlight = require('highlight.js');
var marked = require('marked');
var path = require('path');
var humanize = require('string-humanize');
var through = require('through2');
var PluginError = gulpUtil.PluginError;

function compileGuide(opts) {
  var renderer = new marked.Renderer({
    highlight: true
  });
  var baseCode = renderer.code;
  renderer.code = function(code, language) {
    return code + baseCode.apply(renderer, [code, language]);
  };

  marked.setOptions({
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    },
    renderer: renderer
  });

  var components = [];

  return through.obj(function(file, enc, callback) {
    if (file.isStream()) {
      return callback(new PluginError('gulp-compile-guide', 'Streaming not supported'));
    }

    var name = path.basename(path.dirname(file.path));
    components.push({
      name: name,
      title: humanize(name),
      docs: marked(file.contents.toString())
    });
    callback();
  }, function(callback) {
    var that = this;
    consolidate.jade(opts.layout, {components: components}, function(err, html) {
      if (err) {
        return callback(new PluginError('gulp-compile-guide', err));
      }

      that.push(new gulpUtil.File({
        base: path.dirname(opts.layout),
        contents: new Buffer(html),
        path: replaceExtension(opts.layout, '.html')
      }))

      callback();
    })
  });
};

function replaceExtension(file, extension) {
  return path.join(
    path.dirname(file),
    path.basename(file, path.extname(file)) + extension
  );
}

module.exports = compileGuide;
