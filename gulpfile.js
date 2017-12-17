'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  plumber = require('gulp-plumber');


gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './',
    notify: false
  });

  gulp.watch('./assets/sass/**/*.*', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./assets/*.js').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.*')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream())
});

gulp.task('sass-watch', function () {
  gulp.watch('./assets/sass/**/*.*', ['sass'])
});

gulp.task('default', ['serve']);