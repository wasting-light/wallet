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

gulp.task('server', function() {
  browser({
    server: {
      baseDir: '.'
    },

    port: 3000
  });
});

gulp.task('reload', function() {
  reload();
});

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

gulp.task('jshint', function() {
  return gulp
    .src(['app/**/*.js', '!app/components/**/*.js'])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('jshint-watch', ['jshint'], function() {
  gulp.watch('app/**/*.js', ['jshint']);
});

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

gulp.task('watch', ['server', 'stylus'], function() {
  gulp.watch('app/**/*.styl', ['stylus']);
  gulp.watch(['app/**/*.{html, js}'], ['reload'])
});

gulp.task('default', ['watch']);
