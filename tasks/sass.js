var sass = ['./app/*.scss', './app/**/*.scss'];
gulp.task('sass', function () {
    gulp.src(sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/dist'));
});