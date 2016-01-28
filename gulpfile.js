var	gulp = require('gulp'),
	sass = require('gulp-sass'),
	react = require('gulp-react');

gulp.task('jsx:dev',function(){
	return gulp.src('components/*.jsx')
			.pipe(react())
			.pipe(gulp.dest('public/javascripts'));
});
gulp.task('sass:dev',function(){
	return gulp.src('components/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('public/stylesheets'));
});
gulp.task('dev',['jsx:dev','sass:dev']);
