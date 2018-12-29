var gulp = require("gulp");
var sass = require("gulp-sass");
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var pump = require('pump');
// var rename = require('gulp-rename');
// var browserSync = require('browser-sync');

gulp.task("compileSass",function(){
    return gulp.src("./src/sass/*.scss")
    .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
    .pipe(gulp.dest("./src/css/"))
})

gulp.task("jt",function(){
    gulp.watch('./src/sass/*.scss',gulp.series("compileSass"));
})

// gulp.task('jsmin',function(){
//     pump([
//         gulp.src('./src/js/*.js'),
//         concat('all.js'),
//         gulp.dest('./dist/js/'),
//         uglify(),
//         rename({suffix:".min"}),
//         gulp.dest('dist/js/')
//     ]);
// });

// gulp.task('server',function(){
//     browserSync({
//         server:'./src',
//         port:666,
//         files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
//     });
//     gulp.watch("./src/sass/*.scss",gulp.series("compileSass"))
// })
