var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('sass/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/dist'));
});

gulp.task('watch:sass', ['sass'], function () {
  gulp.watch('sass/**/*.scss', ['sass']);
}); 