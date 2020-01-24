const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function watch() {

  browserSync.init({
      notify: false,
      server: {
        baseDir: 'production'
      }
  });
  gulp.watch('./production/*.html').on('change', browserSync.reload)


}

exports.watch = watch;
