var	gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	react = require('gulp-react');

gulp.task('jsx:dev',function(){
	return gulp.src('components/**/*.jsx')
			.pipe(react())
			.pipe(concat('app.js'))
			.pipe(gulp.dest('public/javascripts'));
});
gulp.task('sass:dev',function(){
	return gulp.src('components/**/*.scss')
			.pipe(sass())
			.pipe(concat('app.css'))
			.pipe(gulp.dest('public/stylesheets'));
});
gulp.task('dev',['jsx:dev','sass:dev'],function(){
	gulp.watch('components/**/*.jsx',['jsx:dev']);
	gulp.watch('components/**/*.scss',['sass:dev']);
});
