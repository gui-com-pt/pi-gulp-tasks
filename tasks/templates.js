var gulp = require('gulp'),
    concat = require('gulp-concat');
    
var templates = ['./public/*.html', './public/**/*.html', './public/**/**/*.html', './public/**/**/**/*.html',
        './app/*.html', './app/**/*.html', './app/**/**/*.html', './app/**/**/**/*.html'];

gulp.task('templates', function () {
    gulp.src(templates)
        .pipe(templateCache())
        .pipe(gulp.dest('./public/dist'));
});