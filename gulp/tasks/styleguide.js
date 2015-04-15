var fs = require('fs');
var path = require('path');
var globby = require('globby');
var marked = require('marked');
var jade = require('gulp-jade');
var livereload = require('gulp-livereload');
var humanize = require('string-humanize');

module.exports = function(gulp, gutil) {
  var source = gulp.config.source;
  var prod = gutil.env.prod;
  
  gulp.task('styleguide-copy', function() {
    return gulp.src([source + '/styleguide/*', '!' + source + '/styleguide/index.jade'])
      .pipe(gulp.dest(gulp.config.target + '/styleguide'));
  });
  
  gulp.task('styleguide', ['styleguide-copy'], function() {
    var files = globby.sync(source + '/components/**/*.md');
    var components = [];

    files.forEach(function(file) {
      var content = fs.readFileSync(file, {
        encoding: 'utf8'
      });
      
      var renderer = new marked.Renderer({
        highlight: true
      });
      var baseCode = renderer.code;
      renderer.code = function(code, language) {
        return code + baseCode.apply(renderer, [code, language]);
      };

      marked.setOptions({
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value;
        }
      });

      var name = path.basename(path.dirname(file));
      components.push({
        name: name,
        title: humanize(name),
        docs: marked(content, {
          renderer: renderer
        })
      });
    });

    return gulp.src(source + '/styleguide/index.jade')
      .pipe(jade({
        locals: {
          components: components
        },
        pretty: true
      }))
      .pipe(gulp.dest(gulp.config.target + '/styleguide'))
      .pipe(prod ? gutil.noop() : livereload());
  });
};
