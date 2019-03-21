var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function () {
	return gulp.src('css/cdplants.css')
		.pipe(uncss({
			html: ['index.html', '**/*.html']
		}))
		.pipe(gulp.dest('./css/opt'));
});
