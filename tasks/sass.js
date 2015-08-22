var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');
    
var sass = ['./app/*.scss', './app/**/*.scss'];
gulp.task('sass', function () {
    gulp.src(sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/dist'));
});