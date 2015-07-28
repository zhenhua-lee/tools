var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprites');
var del = require('del');

gulp.task('sprites', function () {
    return gulp.src('./svg/*.svg')
        .pipe(svgSprite({
            mode: 'defs'
        }))
        .pipe(gulp.dest('./dist/svg'));
});

gulp.task('clean', function(cb) {
    del(['./dist/svg'], function (err, path) {
        console.log(path.join(', '));
    })
});

gulp.task('default', function () {
    gulp.start('sprites');
});
