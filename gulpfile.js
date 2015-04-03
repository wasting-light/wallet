/**
 * Module Dependencies
 */

var gulp       = require('gulp');

var browser    = require('browser-sync');
var jeet       = require('jeet');
var jshint     = require('gulp-jshint');
var stylish    = require('jshint-stylish');
var kouto      = require('kouto-swiss');
var plumber    = require('gulp-plumber');
var reload     = require('browser-sync').reload;
var rename     = require('gulp-rename');
var rupture    = require('rupture');
var sourcemaps = require('gulp-sourcemaps');
var stylus     = require('gulp-stylus');
var vulcanize  = require('gulp-vulcanize');

/**
 * Server task
 *
 * Creates a server and opens the default browser
 */

gulp.task('server', function() {
  browser({
    server: {
      baseDir: './app/'
    },

    port: 3000
  });
});

/**
 * Reload task
 *
 * Reloads the browser
 */

gulp.task('reload', function() {
  reload();
});

/**
 * Stylus task
 *
 * Convert stylus files into css
 */

gulp.task('stylus', function() {
  var files = [
    'app/**/*.styl',
    'app/styles/main.styl',
    '!app/styles/{base,modules}/*.styl',
    '!app/styles/base.styl'
  ];

  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [jeet(), kouto(), rupture()]
    }))
    .pipe(sourcemaps.write())
    .pipe(reload({stream: true}))
    .pipe(gulp.dest('app'));
});

/**
 * Jshint task
 *
 * Lints and shows hints on the javascript code
 */

gulp.task('jshint', function() {
  return gulp
    .src('app/**/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

/**
 * Jshint watch task
 *
 * Watches for javascript changes and lints them
 */

gulp.task('jshint-watch', function() {
  gulp.watch('app/**/*.js', ['jshint']);
});

/**
 * Vulcanize task
 *
 * Concatenates a set of webcomponents into one file
 */

gulp.task('vulcanize', function() {
  return gulp
    .src('app/index.html')
    .pipe(vulcanize({
      dest: 'dist',
      strip: true
    }))
    .pipe(rename('index.vulcanized.html'))
    .pipe(gulp.dest('dist'));
});

/**
 * Watch task
 *
 * Watches for file changes and perform actions
 */

gulp.task('watch', ['server', 'stylus'], function() {
  gulp.watch('app/**/*.styl', ['stylus']);  
  gulp.watch(['app/**/*.{html, js}'], ['reload'])
});

/**
 * Default task
 */

gulp.task('default', ['watch']);