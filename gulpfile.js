var	gulp = require('gulp'),
	react = require('gulp-react');

gulp.task('dev',function(){
	return gulp.src('components/*.jsx')
			.pipe(react())
			.pipe(gulp.dest('public/javascripts'));
});
