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
var concat = require('gulp-concat');




// CREATE VENDOR JS FILE
gulp.task('vendor', function()
{
    return gulp.src([
        'bower_components/threejs/build/three.min.js',
        'bower_components/threejs/examples/js/Detector.js',
        'bower_components/threejs-stats/Stats.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(distFolder + 'js/vendor/'));
});


// BUILD
gulp.task('build', function()
{
    console.log("===> BUILD");

    var tsResult = gulp.src('ts/**/*.ts')
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest(jsFolder));

});





gulp.task('ts-watch', ['build'], function (done) {
    browserSync.reload();
    done();
});
gulp.task('serve', ['build'], function()
{
    browserSync.init({
        server: {
            baseDir: distFolder
        }
    });

    gulp.watch(tsFolder + "**/*.ts", ['ts-watch']);
});
