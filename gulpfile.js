var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass');



gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function(){
	return gulp.src('app/sass/**/*.css')
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("js", function() {
	return gulp.src("app/js/**/*")
	.pipe(gulp.dest("dist/js"))
	.pipe(browserSync.reload({stream: true}))

});

gulp.task("html", function () {
    return gulp.src("app/**/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", function () {
    browserSync.init({
        server: "./dist",
        notify: false,
        ui: {
            port: 3000
        }
    });
    gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
    gulp.watch('app/sass/**/*.css', gulp.series('css'));
    gulp.watch('app/img/**/*', gulp.series('img'));
    gulp.watch('app/js/**/*', gulp.series('js'));
    gulp.watch('app/**/*.html' , gulp.series('html'));

});
gulp.task('default', gulp.series('watch', 'sass', 'css', 'img', 'js', 'html'));