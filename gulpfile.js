var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('build-ts', function () {
    return browserify({
        entries: './src/ts/app.ts'
    }).plugin('tsify')
        .plugin('licensify')
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest('./static/js'));
});

gulp.task('watch', function () {
    gulp.watch('src/ts/**/*.ts', ['build-ts']);
});
