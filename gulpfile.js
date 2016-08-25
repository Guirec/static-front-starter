/*
 * Gulpfile
 */

// Load plugins
const gulp         = require('gulp');
const pug          = require('gulp-pug');
const stylus       = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const uglify       = require('gulp-uglify');
const imagemin     = require('gulp-imagemin');
const rename       = require('gulp-rename');
const browserSync  = require('browser-sync');

// Variables
var reload = browserSync.reload;

// Paths
var srcPath = 'src';
var distPath = 'dist';
var paths = {
  templates: srcPath + '/templates',
  styles: srcPath + '/styles',
  scripts: srcPath + '/scripts',
  images: srcPath + '/images',
  fonts: srcPath + '/fonts'
};

// Templates
gulp.task('templates', function() {
  return gulp.src(paths.templates + '/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(distPath));
});

// Styles
gulp.task('styles', function() {
  return gulp.src(paths.styles + '/*.styl')
    .pipe(stylus())
    .on('error', swallowError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .on('error', swallowError)
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(distPath + '/assets/css'))
    .pipe(reload({stream: true}));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(paths.scripts + '/**/*.js')
    .pipe(uglify())
    .on('error', swallowError)
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(distPath + '/assets/js'))
    .on('end', reload);
});

// Images
gulp.task('images', function() {
  return gulp.src(paths.images + '/**/*')
    .pipe(imagemin())
    .on('error', swallowError)
    .pipe(gulp.dest(distPath + '/assets/images'))
    .on('end', reload);
});

// Fonts
gulp.task('fonts', function() {
  return gulp.src(paths.fonts + '/**/*')
    .pipe(gulp.dest(distPath + '/assets/fonts'))
    .on('end', reload);
});

// Watch
gulp.task('templates-watch', ['templates'], reload);

// Prevent errors from breaking gulp watch
function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

// Build: one shot
gulp.task('build', ['templates', 'styles', 'scripts', 'images', 'fonts']);

// Default: watch changes
gulp.task('default', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    notify: false
  });

  gulp.watch(paths.templates + '/**/*.pug', ['templates-watch']);
  gulp.watch(paths.styles + '/**/*.styl', ['styles']);
  gulp.watch(paths.scripts + '/**/*.js', ['scripts']);
  gulp.watch(paths.images + '/**/*', ['images']);
  gulp.watch(paths.fonts + '/**/*', ['fonts']);
});
