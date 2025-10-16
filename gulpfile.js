const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Registra a tarefa styles
gulp.task('styles', styles);

// Tarefa watch
function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel('styles'));
}

exports.default = styles;
exports.watch = watch;