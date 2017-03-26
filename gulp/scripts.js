var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function(){
    gulp.src(['app/**/*.js}'])
        .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
//            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/dist'));   
});

gulp.task('watch:js',['js'], function(){
    gulp.watch('app/**/*.js',['js']);
});