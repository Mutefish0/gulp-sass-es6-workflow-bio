var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify')
// 要打包的实体
var entries = require('./entries')

gulp.task('default',function(){
    console.log('gulpfile configured...')
})

gulp.task('lib-style',function(){
    return gulp.src('./src/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass().on('error',sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./lib/css/'))
})

gulp.task('watch-style',function(){
    gulp.watch('./src/css/**/*.scss',['lib-style'])
})


gulp.task('lib-script',function(){
    return gulp.src('./src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        plugins:['transform-runtime'],
        presets:['es2015','es2017']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./lib/js/'))
})

gulp.task('browserify',function(){
     gulp.src(entries)
    .pipe(sourcemaps.init({loadMaps:true}))
    .pipe(browserify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./lib/js/bundle'))
})


gulp.task('watch-script',function(){
    gulp.watch('./src/js/**/*.js',['lib-script'])
})