
////////////////////////////////////////////////////////
//                                                   ///
//   commands:                                       ////
//                                                   ////
//     npm i -g gulp                                 ////
//     npm i gulp gulp-less gulp-watch path          ////
//     gulp                                          ////
//                                                   ///
////////////////////////////////////////////////////////

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    path = require('path');


gulp.task('watch', ['less'], function() {
 gulp.watch('less/**/*.less', ['less']);
});

gulp.task('less', function() {
  gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});
