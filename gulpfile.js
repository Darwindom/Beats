const { src, dest, task } = require("gulp");
const rm = require( "gulp-rm" );

task("clean", () => {
    return src("dist/**/*", { read: false }).pipe( rm());
  });

function copy() {
    return src("src/styles/*.scss").pipe(dest("dist"));
}

exports.copy = copy;