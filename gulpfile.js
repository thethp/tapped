'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles/'));
});

gulp.task('default', function() {
  gulp.run('sass');
  gulp.watch('./sass/**/*.scss', ['sass']);
}); 
