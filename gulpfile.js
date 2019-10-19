'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series(['sass']));
});

 
gulp.task('serve', serve('dist'));