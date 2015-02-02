var gulp    = require('gulp')
  , browser = require('browser-sync')
  , rename  = require('gulp-rename')
  , uglify  = require('gulp-uglify');

gulp.task('server', function() {
  browser({
    server: {
      baseDir: '.'
    }
  });
});

gulp.task('js', function() {
  gulp.src(['src/*.js', '!*.js'])
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest('.'))
  .pipe(browser.reload({stream:true}))
});

gulp.task('default', ['server'], function() {
  gulp.watch(['src/*.js', '!*.js'], ['js']);
});
