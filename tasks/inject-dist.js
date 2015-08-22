var gulp = require('gulp'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject');
    
gulp.task('inject-dist', function () {
  var target = gulp.src('./public/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./public/dist/*.js', './public/dist/*.css'], {read: false});

  return target.pipe(inject(sources, {ignorePath: '/public', addRootSlash: false}))
    .pipe(gulp.dest('./public'));
});