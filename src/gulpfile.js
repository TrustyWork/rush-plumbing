var path = require("path");

var gulp = require("gulp"),
    jade = require("gulp-jade"),
// browserify дает возможность исспользовать require() в фронт-скриптах
    browserify = require("gulp-browserify"),
// gulp-uglify		js в одну строку (минификация)
    uglify = require("gulp-uglify"),
// clean-css (ранее назывался gulp-minify-css),
// делает именно то, что и было в его предыдущем названии - минифицирует css файл
    cleanCss = require("gulp-clean-css"),
// gulp-if синтаксис типа (gulpif(env === "p", uglify()))
    gulpif = require("gulp-if"),
// gulp-sass отрабатывает sass/scss код в css
    sass = require("gulp-sass"),
// gulp-connect аналог browsersinc, имеет большой спектр настроек, быстрее отрабатывает запросы,
// однако тяжелее для запуска
    connect = require("gulp-connect"),
// gulp-autoprefixer префиксы кроссбраузера
    autoprefixer = require("gulp-autoprefixer"),
// plumber не дает галпу упасть в случае ошибки
// необходимо подключить ко всем таскам, кроме листенера (watch)
    plumber = require("gulp-plumber"),
// notify работает в связке с plumber и выдает более осмысленную диагностику в виде алертов,
// для работы вместо .pipe(plumber())
// писать .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    notify = require("gulp-notify"),
// Склеивает файлы в один, подключил в Валерин галп для склейки JS. AletLitv.
    concat = require('gulp-concat'),
//Бабель он и в африке бабель. AletLitv.
    babel = require('gulp-babel'),
//Ресайз картинок. Для работы нужно дополнительно установать imagemagick и graphicsmagick. AletLitv.
    imageResize = require('gulp-image-resize'),
//Минификатор картинок. AletLitv.
	image = require('gulp-image')
//Jade минифицирует только себя, это для того чтобы минифицыровать различные вклейки в шаблон(например код в теге script, css в style, svg). AletLitv.
    ,htmlmin = require('gulp-htmlmin')
//соурсмапы
    ,sourcemaps = require('gulp-sourcemaps');

//var env = process.env.NODE_ENV || "p";
var env = "p";
var outputDir = "../";
var inputDir = "src";

var angular= true;


gulp.task("jade", function () {
    gulp.src(inputDir + "/templates/**/[^_]*.jade")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(jade())
        .pipe(htmlmin({
            //collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest( outputDir))
        .pipe(connect.reload());
})

gulp.task("angular-jade", function () {
    gulp.src( inputDir + "/app/**/[^_]*.jade")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(jade())
        .pipe(htmlmin({
            //collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest( outputDir + "/app"))
        .pipe(connect.reload());
})

gulp.task("js", function () {
    gulp.src( inputDir + "/js/**/*.js")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(browserify({debug: env === "d"}))
        .pipe(gulpif(env === "p", uglify()))
        .pipe(gulp.dest( outputDir + "/js"))
        .pipe(connect.reload());
})

gulp.task("angular-js", function () {
    gulp.src([
	        inputDir + "/app/before.js"
            //,inputDir + "/app/vendor/angular/angular.min.js"
            //,inputDir + "/app/vendor/angular/angular-route.min.js"
            //,inputDir + "/app/vendor/angular/angular-truncate.js"
            ,inputDir + "/app/vendor/**/*.js"
            ,inputDir + "/app/app.js"
            ,inputDir + "/app/**/*.js"
            ,inputDir + "/app/after.js"
        ]).pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify({debug: env === "d"}))
        .pipe(gulpif(env === "p", uglify()))
        .pipe(gulp.dest(outputDir + "/app"))
        .pipe(connect.reload());
})

gulp.task("styles", function () {
    var config = {
		outputStyle: "expanded"
	}

    if (env === "p") {
        config.outputStyle = "compressed"
    }
    //если работаете с чистым plumber-ом, то нужно убрать return в gulp.src, иначе plumber намертво повесит gulp-модуль
    gulp.src(inputDir + "/styles/main.scss")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulpif(env !== "p", sourcemaps.init()))
        .pipe(sass(config))
        .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        .pipe(gulpif(env !== "p", sourcemaps.write()))
        .pipe(gulpif(env === "p", cleanCss()))
        // .pipe(cleanCss())
        .pipe(gulp.dest(outputDir + "/styles"))
        .pipe(connect.reload());
})

gulp.task("images", function () {
    gulp.src(
        [inputDir + '/images/**/*.png',
            inputDir + '/images/**/*.jpg',
            inputDir + '/images/**/*.jpeg',
            inputDir + '/images/**/*.gif',
            inputDir + '/images/**/*.tiff',
            inputDir + '/images/**/*.webp',
            inputDir + '/images/**/*.ico'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(imageResize({
            width : 600,
            height : 600,
            crop : true,
            upscale : false
        }))
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            concurrent: 10
        }))
        .pipe(gulp.dest(outputDir + "/images"))
        .pipe(connect.reload());

    gulp.src(
        [inputDir + '/images/**/*.svg'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(image({
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest(outputDir + "/images"))
        .pipe(connect.reload());
})

gulp.task("fonts", function () {
    gulp.src(inputDir + "/fonts/**/*.*")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest(outputDir + "/fonts"))
        .pipe(connect.reload());
})

//Область watch для автообновления тасков
gulp.task("watch", function () {
    //gulp.watch(inputDir + "/templates/**/*.jade", ["jade"])
    //gulp.watch(inputDir + "/app/**/*.jade", ["angular-jade"])
    gulp.watch(inputDir + "/**/*.jade", ["jade", "angular-jade"])
    gulp.watch(inputDir + "/js/**/*.js", ["js"])
    gulp.watch(inputDir + "/app/**/*.js", ["angular-js"])
    gulp.watch(inputDir + "/styles/**/*.scss", ["styles"])
    gulp.watch(inputDir + "/images/**/*.+(jpeg|jpg|png|tiff|webp/svg)", ["images"])
    gulp.watch(inputDir + "/fonts/**/*.*", ["fonts"])
})

//  определяем свойства модуля connect
gulp.task("connect", function () {
    connect.server({
        root: [ outputDir],
        port: 9000,
        livereload: true
    })
})

gulp.task("default", ["connect",
    "jade",
    "angular-jade",
    "js",
    "angular-js",
    "styles",
	"images",
    "fonts",
    "watch"])