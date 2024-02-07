const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const imagemin = require("gulp-imagemin");

function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

function images() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

// Adicione a tarefa "build" para incluir as tarefas de styles e images
exports.build = gulp.parallel(styles, images);

exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};

// Mantenha a tarefa padrão para "npm run dev"
exports.default = exports.watch;
