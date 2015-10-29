var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      port: 8080,
      root: './',
      livereload: true,
        directoryListing: true,
        open: false
    }));
});

gulp.task('default', ['webserver']);