var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var less = require('gulp-less');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var args = require('yargs').argv;

var config = {
    js: {
      src: ['./src/app.js'],
      outputDir: './static/javascript',
      outputFile: 'app.min.js'
    },
    less: {
      src: ['./src/app.less'],
      outputDir: './static/css/',
      outputFile: 'app.min.css',
      watch: ['./src/**/*.less']
    }
};

var errorHandler = function(err) {
  gutil.log(err);
  this.emit('end');
};

function compile(watch) {
  if (args.production) {
    process.env.NODE_ENV = 'production';
  }
  var bundler = browserify({
    entries: config.js.src,
    debug: true, // Gives us sourcemapping
    cache: {},
    packageCache: {},
  }).transform('babelify', {
    presets: ['es2015', 'react']
  });

  function rebundle() {
    bundler.bundle()
      .on('error', errorHandler)
      .pipe(source(config.js.outputFile))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error', errorHandler)
      .pipe(sourcemaps.write('./'))
      .pipe(debug())
      .pipe(gulp.dest(config.js.outputDir));
  }

  if (watch) {
    var watcher = watchify(bundler);
    watcher.on('update', function() {
      rebundle();
    });
  }

  rebundle();
}

gulp.task('js', function() {
  return compile();
});

gulp.task('js-watch', function() {
  return compile(true);
});

gulp.task('less', function() {
  return gulp.src(config.less.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(debug())
    .on('error', errorHandler)
    .pipe(rename(config.less.outputFile))
    .pipe(gulp.dest(config.less.outputDir))
    .pipe(connect.reload());
});

gulp.task('less-watch', function() {
  gulp.watch(config.less.watch, ['less']);
});

gulp.task('server', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('build', ['js', 'less']);

gulp.task('watch', ['js-watch', 'less-watch']);

gulp.task('default', ['build', 'server', 'watch']);
