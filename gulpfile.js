var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

gulp.task('browserify', function() {
	gulp.src('src/js/app.js')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('js/app.js'))
		.pipe(gulp.dest('dist'))
});

gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
	gulp.src('src/styl/*.*')
		.pipe(stylus())
		.pipe(concat('css/app.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify', 'copy', 'css', 'watch']);

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', ['default']);
});