var gulp = require('gulp');

// TYPESCRIPT
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");
var gulpTypings = require('gulp-typings');

// FOLDERS
var tsFolder = "ts/";
var distFolder = "../dist/";
var jsFolder = distFolder + "js/";

// PLUGINS
var browserSync = require('browser-sync').create();




// TS COMPILATION
gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(jsFolder));
});
// INSTALL TS TYPINGS
gulp.task("installTypings",function(){
    var stream = gulp.src("./typings.json")
        .pipe(gulpTypings()); //will install all typingsfiles in pipeline.
    return stream; // by returning stream gulp can listen to events from the stream and knows when it is finished.
});




// BUILD
gulp.task('build', function() {
    var tsResult = gulp.src('ts/**/*.ts')
        .pipe(ts({
            declaration: true
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest(jsFolder + 'definitions')),
        tsResult.js.pipe(gulp.dest(jsFolder))
    ]);
});





gulp.task('ts-watch', ['ts'], function (done) {
    browserSync.reload();
    done();
});
gulp.task('serve', ['ts'], function() {
    browserSync.init({
        server: {
            baseDir: distFolder
        }
    });

    gulp.watch(tsFolder + "*.ts", ['ts-watch']);
});
