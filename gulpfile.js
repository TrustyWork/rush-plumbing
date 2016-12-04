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
    notify = require("gulp-notify");


var env = process.env.NODE_ENV || "d";
var outputDir = "dist";
var inputDir = "src";


gulp.task("jade", function () {
    gulp.src(inputDir + "/templates/**/*.jade")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(jade())
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload());
})

gulp.task("js", function () {
    gulp.src(inputDir + "/js/main.js")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(browserify({debug: env === "d"}))
        .pipe(gulpif(env === "p", uglify()))
        .pipe(gulp.dest(outputDir + "/js"))
        .pipe(connect.reload());
})

gulp.task("sass", function () {
    var config = {}
    if (env === "d") {
        config.sourceComments = "map"
    } else if (env === "p") {
        config.outputStyle = "compressed"
    }
    //если работаете с чистым plumber-ом, то нужно убрать return в gulp.src, иначе plumber намертво повесит gulp-модуль
    gulp.src(inputDir + "/sass/main.scss")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass(config))
        .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        .pipe(gulpif(env === "p", cleanCss()))
        // .pipe(cleanCss())
        .pipe(gulp.dest(outputDir + "/css"))
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
            inputDir + '/images/**/*.svg'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest(outputDir + "/files/img"))
        .pipe(connect.reload());
})

gulp.task("fonts", function () {
    gulp.src(inputDir + "/fonts/**/*.*")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest(outputDir + "/files/fonts"))
        .pipe(connect.reload());
})

gulp.task("icon", function () {
    gulp.src(inputDir + "/templates/**/*.ico")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(gulp.dest(outputDir + "/files"))
        .pipe(connect.reload());
})


//Область watch для автообновления тасков
gulp.task("watch", function () {
    gulp.watch(inputDir + "/templates/**/*.jade", ["jade"])
    gulp.watch(inputDir + "/templates/*.ico", ["icon"])
    gulp.watch(inputDir + "/js/**/*.js", ["js"])
    gulp.watch(inputDir + "/sass/**/*.scss", ["sass"])
    gulp.watch(inputDir + "/images/**/*.+(jpeg|jpg|png|tiff|webp/svg)", ["images"])
    gulp.watch(inputDir + "/fonts/**/*.*", ["fonts"])
})

//  определяем свойства модуля connect
gulp.task("connect", function () {
    connect.server({
        root: [outputDir],
        port: 9000,
        livereload: true
    })
})

gulp.task("default", ["connect",
    "jade",
    "icon",
    "js",
    "sass",
    "images",
    "fonts",
    "watch"])